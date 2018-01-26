const Akairo = require('discord-akairo');
const logger = require('./lib/logger');
const config = require('./config');
const defaults = require('./defaults');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

config.ownerID = parseInt(process.argv[2]);
config.token = process.argv[3];
config.emmiters = {
  process: process
};

class N46Client extends Akairo.AkairoClient {
  constructor (config) {
    super(config);

    // Set up database
    const adapter = new FileSync('./lib/db.json');
    this.db = low(adapter);
    this.db.defaults(defaults);
    // Helpful for reaction sequences
    this.reactor = (message, reaction) => {
      return () => {
        return message.react(reaction);
      };
    };
  }
}

// Start the client and input the token
const client = new N46Client(config, {
  disableEveryone: true
});

logger.log('core', 'Logging In...');

client.login(config.token).then(() => {
  logger.log('core', 'BOT STARTED');
});
