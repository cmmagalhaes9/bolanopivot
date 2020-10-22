const { Guild, Channel, Client } = require("discord.js")

module.exports = {
    name:'cleanmembers',
    description:'limpar inativos',
    execute(message){
        guild.members.fetch()
            .array.forEach(m => {
                message.channel.send(m.id)
            });
    }
}