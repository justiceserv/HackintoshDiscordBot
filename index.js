const DiscordJS = require('discord.js'); 
const client = new DiscordJS.Client(); 
const config = require('./config/config.json');
client.on('unhandledRejection', error => console.error('Uncaught Promise Rejection', error)); 
client.on("message", async message => {
    if(message.startsWith(config.prefix))
    {
        var args = message.content.slice(config.prefix.length).split();
        if(args == "help")
        {
            var funchelp = require('./functions/help.js'); 
            funchelp.Help; 
        } 
        else if(args == "hhs")
        {

        }
        else if(args == "hh")
        {

        }
        else if(args == "ocguide")
        {
            var funchelp = require("./functions/ocguide.js");
            funchelp.OCGuide; 
        }
    }
}); 
client.login(config.token); 