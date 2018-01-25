const { Command } = require('discord-akairo');

class TFWCommand extends Command {
  constructor () {
    super('tfw', {
      aliases: ['tfw']
    });
  }

  exec (message, args) {
    const reactor = (message, reaction) => {
      return () => {
        return message.react(reaction);
      };
    };
    message.reply('😞').then((message) => {
      message.react('🇹')
        .then(reactor(message, '🇫'))
        .then(reactor(message, '🇼'))
        .then(reactor(message, '🇼'))
        .then(reactor(message, '🇳'))
        .then(reactor(message, '🇴'))
        .then(reactor(message, '👨‍❤️‍👨'));
    });
  }
}

module.exports = TFWCommand;
