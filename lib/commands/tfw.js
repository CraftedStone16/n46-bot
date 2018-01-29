const { Command } = require('discord-akairo');

class TFWCommand extends Command {
  constructor () {
    super('tfw', {
      aliases: ['tfw'],
      cooldown: 10000,
      ratelimit: 2
    });
  }

  exec (message, args) {
    message.reply('😞').then((message) => {
      this.client.editAppendSequence(message, ['🇹', '🇫', '🇼', '🇼', '🇳', '🇴', '👨‍❤️‍👨']);
    });
  }
}

module.exports = TFWCommand;
