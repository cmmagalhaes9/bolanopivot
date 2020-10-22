const { Guild, Channel, Client } = require("discord.js")

module.exports = {
    name:'cleanmembers',
    description:'limpar inativos',
    execute(message){
        guild.members.fetch()
            .then(message.Channel.send('ok'));
    }
}