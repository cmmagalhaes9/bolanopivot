
module.exports = {
    name:'cleanmembers',
    description:'limpar inativos',
    execute(message,client){
        const guild = client.guilds.cache.get("537337830138052615");
        i=1;
        guild.members.cache.forEach(member =>{
            if(member.roles === NULL)
            {
                console.log(i);
                console.log(member.user.name);
                i++
            }
        } );
    }
}