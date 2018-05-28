const { AkairoClient } = require('discord-akairo');
const EnmapProvider = require('../util/EnmapProvider');
const logger = require('../util/logger');

class N46Client extends AkairoClient {
  /**
   * N46Client Class
   * @param object clientConfig client-specific configuration
   * @param object databases databases (enmaps) to use: { config, users, jobs }
   */
  constructor (clientConfig, { config, users, jobs }) {
    clientConfig.commandDirectory = './src/modules';
    clientConfig.listenerDirectory = './src/modules';
    clientConfig.inhibitorDirectory = './src/modules';

    super(clientConfig);

    this.configDB = new EnmapProvider(config);
    this.usersDB = new EnmapProvider(users);
    this.jobsDB = new EnmapProvider(jobs);

    this.logger = logger;
  }

  /**
   * Init’s all the databases
   */
  async init () {
    await this.configDB.init();
    await this.usersDB.init();
    await this.jobsDB.init();
  }

  /**
   * Starts the bot
   * @param  string token Discord API token
   */
  async start (token) {
    await this.init();
    await this.login(token);
  }
}

module.exports = N46Client;