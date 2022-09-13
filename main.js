const Discord = require("discord.js");

const client = new Discord.Client();


const prefix = ';';

const fs = require('fs');
const { isBuffer } = require("util");

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file=>file.endsWith('.js'));

for(const file of commandFiles)
{
    const command = require(`./commands/${file}`);

    client.commands.set(command.name,command);
}

client.on('ready', ()=>{
    var channel = client.channels.cache.find(c=>c.id==='764890387668008990');
    console.log("Bola no pivot está online!");
    //channel.send("Bola No Pivot está novamente online!");
})

client.on('message',message=>{
    if(!message.content.startsWith(prefix) || message.author.bot)return;

    const args= message.content.slice(prefix.length).trim().split(' ');
    const command = args.shift().toLowerCase();
    console.log(command)

    if(message.channel.id=='708666739872890950' || message.channel.id=='764890387668008990')
    {
       
        if(command==='study'){
        client.commands.get('study').execute(message,args);   
        };
        if(command==='unstudy'){
            client.commands.get('unstudy').execute(message,args) 
        };
        if(command==='info'){
            console.log("AQUI")
            client.commands.get('info').execute(message)
        };
        if(command==='ucs'){
            client.commands.get('ucs').execute(message)
        };
        
        

    }
    
});

client.login("NzY0MjE3OTc5MDkyMjA1NjA5.GPScWp.jO-_qLqQ49zfdHNxLL5umxwLDCPvmzXbaALn3o");
