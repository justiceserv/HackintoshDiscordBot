import DiscordJS, { User, MessageEmbed, Message } from 'discord.js'; 
import config from '../config/config.json'; 
const Help
{
    const HelpMessage = new MessageEmbed()
        .setColor('')
        .setAuthor('Hackintosh Helper')
        .setTitle('Hackintosh Helper Help Menu')
        .setDescription('Help Menu for Hackintosh Helper')
        .addFields(
            {name: `${config.prefix}help`, value: 'Help menu for Hackintosh Helper', inline: true},
            {name: `${config.prefix}hh {Laptop Model}`, value: 'Search if there is any existing repo for laptop model', inline: true},
            {name: `${config.prefix}ochelp`, value: 'Shows Opencore Guide (Dortania) link', inline: true},
            {name: `${config.preifx}hhs {laptopmodel}`, value: 'Search Specification of Laptop', inline: true}
        )
    .setFooter("By Hackintosh Helper")
    Message.channel.send(HelpMessage); 
}
export { Help }