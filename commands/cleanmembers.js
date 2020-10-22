
module.exports = {
    name:'cleanmembers',
    description:'limpar inativos',
    execute(message){
        const guild = client.guilds.cache.get("537337830138052615");
        guild.members.cache.forEach(member => console.log(member.user.username));
    }
}