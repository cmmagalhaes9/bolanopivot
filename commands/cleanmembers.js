
module.exports = {
    name:'cleanmembers',
    description:'limpar inativos',
    execute(message){
        guild.members.cache.forEach(member => console.log(member.user.username));
    }
}