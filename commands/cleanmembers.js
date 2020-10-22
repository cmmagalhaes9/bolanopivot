const { Guild, Channel, Client } = require("discord.js")

module.exports = {
    name:'cleanmembers',
    description:'limpar inativos',
    execute(message){
        guild.members.prune({days: 7, reason:'Inativo à 30 dias, para voltar a entrar no servidor pede um convite e não esqueças de pedir roles na próxima!'});
        message.channel.send('clean');
    }
}