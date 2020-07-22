const { Client, MessageEmbed } = require('discord.js');
const config = require('./config.json');
//const bot = new Discord.Client();

// Create an instance of a Discord client
const client = new Client();
const token = config.token;
const msg = "poopy";
const stinky = "uh oh";
/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  if (message.content.toLowerCase().includes(msg)) {
    message.react('💩');
  }
  if (message.content.toLowerCase().includes(stinky)) {
    message.channel.send("stinky");
  }
});

// Log our bot in using the token
client.login(token);



// const expression = "\bpoopy\b";

// bot.on('ready', () => {
//     console.log('This bot is online!');
// })

// bot.on('message', msg => {
//     if(msg.content == "poopy"){
//         msg.reply('haha funny');
//     }
// })

// bot.login(token);
