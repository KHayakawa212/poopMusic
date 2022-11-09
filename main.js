const Discord = require('discord.js');
require('dotenv').config();

const client = new Discord.Client({ intents: [Discord.GatewayIntentBits.Guilds] });

client.once('ready', () => {
    console.log('ready');
})

//must be last line
client.login(process.env.token);