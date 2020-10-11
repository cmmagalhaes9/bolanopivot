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

client.once('ready', ()=>{
    console.log("Bola no pivot está online!");
})

client.on('message',message=>{
    if(!message.content.startsWith(prefix) || message.author.bot)return;

    const args= message.content.slice(prefix.length).trim().split(' ');
    const command = args.shift().toLowerCase();

    if(message.channel.id=='708666739872890950' || message.channel.id=='764890387668008990')
    {
       
        if(command==='study'){
        client.commands.get('study').execute(message,args);   
        };
        if(command==='unstudy'){
            client.commands.get('unstudy').execute(message,args) 
        };
        if(command==='info'){
            client.commands.get('info').execute(message)
        };
        if(command==='ucs'){
            client.commands.get('ucs').execute(message)
        };
        if(command==='avisos'){
            const canal = client.channel.cache.find(channel=>channel.id==='764890387668008990')
            canal.send('Aviso!\n Devido às novas modificações do Discord de LEI pedimos que todos passem pelo canal #🤖bot-commands para atualizarem as suas permissões.\n Dentro de uma semanaa apagaremos os membros sem roles para limpar o servidor de utilizadores inativos!\nObrigado!');
        };

    }
    
});

client.login(process.env.token);