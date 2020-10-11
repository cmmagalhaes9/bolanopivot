const Discord = require("discord.js");

module.exports = {
    name:'info',
    description:'informar users',
    execute(message){
        const embed = new Discord.MessageEmbed()
        .setColor('FF8F00')
        .setTitle('Comandos')
        .setAuthor('Ao adicionar cadeiras não utilizar [ ]')
        .setThumbnail('https://scontent.fopo3-1.fna.fbcdn.net/v/t1.0-9/64333410_2509673185733780_1283225542442614784_o.png?_nc_cat=106&_nc_sid=825194&_nc_ohc=XWQXj6apqZsAX-hYpMx&_nc_oc=AQklk0R6K4SL67SCncOI2XvTfV1Kw3bU-m-IP3lPkWIAATFefq_dCEFhLpxObT0TEvE&_nc_ht=scontent.fopo3-1.fna&oh=bd7c71ac7586bac4a1aedefd83e15837&oe=5FA81DFE')
        .addFields(
            {name:'Adicionar Cadeiras',value:';study XanoYsem \n(trocar valores de X e Y pelo ano e semestre respetivamente)', inline:true},
            {name:'Remover Cadeiras',value:';unstudy XanoYsem\n (trocar valores de X e Y pelo ano e semestre respetivamente)', inline:true},
            { name: '\u200B', value: '\u200B' },
            {name:'Adicionar Cadeiras Isoladas',value:';study Código_Cadeira\n (usar comando ;ucs para ver os códigos de cada cadeira)',inline:true},
            {name:'Remover Cadeiras Isoladas',value:';unstudy Código_Cadeira\n (usar comando ;ucs para ver os códigos de cada cadeira)',inline:true},
            
        )
        message.channel.send(embed);
    }
}