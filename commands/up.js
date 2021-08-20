const Discord = require("discord.js");

module.exports = {
    name:'info',
    description:'informar users',
    execute(message){
        console.log('ok');
        message.channel.send("Bola No Pivot está novamente online!");
    }
}

