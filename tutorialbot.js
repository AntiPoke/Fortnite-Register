const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NDY2NDQ0MTg5ODQwODM0NTkw.DicaFQ.MmiOmN3Nbb4DmVmQ6TbAMOnddwU';

client.login(token);

client.on('message', message => {

    if(message.content.toLowerCase() === 'register')
        message.channel.send('Choose a region by doing ?region NA,EU,AS and OCE ' + message.author);

    else if(message.content.toLowerCase() === 'register2')
        message.reply('pong');

    else if(message.content.toLowerCase() === 'sayhi')
        message.channel.send('hello there! im a bot');

});