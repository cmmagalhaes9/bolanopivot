const { Guild, Channel } = require("discord.js")

module.exports = {
    name:'cleanmembers',
    description:'limpar inativos',
    execute(message){
        i=0;
       members = guild.members.forEach(m => {
           i++;
           message.channel.send(i);
       });
    }
}