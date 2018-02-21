const { Command } = require('discord-akairo');

// Tested and works: 2018-02-21
// No edits since

class TFWCommand extends Command {
  constructor () {
    super('tfw', {
      aliases: ['tfw'],
      cooldown: 10000,
      ratelimit: 2
    });
  }

  exec (message, args) {
    return message.reply('😞 🇹 🇫 🇼 🇳 🇴 👨‍❤️‍👨');
  }
}

module.exports = TFWCommand;
