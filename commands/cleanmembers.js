const { Guild, Channel } = require("discord.js")

module.exports = {
    name:'cleanmembers',
    description:'limpar inativos',
    execute(message){
        i=0;
       message.Guild.fetch().forEach(m => {
           i++
           message.Channel.send(i.toString());
       });
    }
}