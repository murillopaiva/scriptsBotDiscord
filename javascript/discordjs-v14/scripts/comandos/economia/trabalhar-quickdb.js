//Command trabalhar
//Exemplo: !trabalhar
//Linguagem usada: js
//Author: aquelemesmoojack#4306
//Versão: Discord.JS v13

const Discord = require("discord.js")
const db = require("quick.db") //npm i --save quick.db

module.exports.run = async (client, message, args) => {
    const membro = message.author;
    let random = Math.floor(Math.random() * quantidade) //nesse "quantidade" voce pode por qualquer numero que ira ser gerado aleatorio no maximo daquele numero
    let work = await db.fetch(`work.${message.guild.id}.${membro.id}`)
    let cooldown = Math.floor(Math.random() * 1500)

    //cooldown
    
    
    const embed = new Discord.MessageEmbed()
    .setTitle("Sucesso!")
    .setThumbnail(client.user.displayAvatarURL())
    .setColor("RANDOM")
    .setDescription("Você trabalhou e ganhou " + random + " moedas!")
    db.set(`moedas.${message.guild.id}.${membro.id}`, random) //quando o comando for executado, sera adicionado a db e quando executar isso vai ser somado
    db.set(`work.${message.guild.id}.${membro.id}`, new Date())
    message.reply({embeds: [embed]})
}