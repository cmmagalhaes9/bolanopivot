
module.exports = {
    name:'cleanmembers',
    description:'limpar inativos',
    execute(message){
        guild.members.fetch()
            .then(message.Channel.send('ok'));
    }
}