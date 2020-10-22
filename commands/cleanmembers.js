
module.exports = {
    name:'cleanmembers',
    description:'limpar inativos',
    execute(message){
        guild.members.cache.forEach(member => message.channel.send(member.user.username));
    }
}