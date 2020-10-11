const Discord = require("discord.js");

module.exports = {
    name:'avisos',
    description:'enviar avisos',
    execute(message){
        message.Guild.members.array.forEach(member => member.send('Aviso!\n Devido às novas modificações do Discord de LEI pedimos que todos passem pelo canal #🤖bot-commands para atualizarem as suas permissões.\n Dentro de uma semanaa apagaremos os membros sem roles para limpar o servidor de utilizadores inativos!\nObrigado!'));
        }
}