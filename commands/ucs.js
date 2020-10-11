const Discord = require("discord.js");

module.exports = {
    name:'ucs',
    description:'códigos ucs',
    execute(message){
        const embed2 = new Discord.MessageEmbed()
        .setColor('FF8F00')
        .setTitle('Códigos UCs')
        .setAuthor('Ao adicionar cadeiras não utilizar [ ]')
        .setThumbnail('https://scontent.fopo3-1.fna.fbcdn.net/v/t1.0-9/64333410_2509673185733780_1283225542442614784_o.png?_nc_cat=106&_nc_sid=825194&_nc_ohc=XWQXj6apqZsAX-hYpMx&_nc_oc=AQklk0R6K4SL67SCncOI2XvTfV1Kw3bU-m-IP3lPkWIAATFefq_dCEFhLpxObT0TEvE&_nc_ht=scontent.fopo3-1.fna&oh=bd7c71ac7586bac4a1aedefd83e15837&oe=5FA81DFE')
        .addFields(
            {name:'1º Ano 1º Semestre', value:'[Álgebra] Álgebra Linear\n[Análise1] Análise Matemática I\n[MP1] Programação Procedimental\n[LAB1] Laboratório de Informática e Computadores\n[Seminário] Seminário de Informática\n[Tópicos] Tópicos de Matemática Discreta',inline:false},
            {name:'1º Ano 2º Semestre',value:'[Análise2] Análise Matemátia II\n[Física] Elementos de Física Geral\n[ENO] Engenharia nas Organizações\n[LAB2] Laboratório de Programação\n[MP2] Programação Orientada a Objetos\n[SD] Sistemas Digitais',inline:false },
            { name: '\u200B', value: '\u200B' },
            {name:'2º Ano 1º Semestre', value:'[Arquitetura] Arquitetura de Computadores\n[Compiladore] Compiladores\n[Eng.Software] Engenharia de Software\n[Métodos] Métodos Estatísticos\n[SO] Sistemas Operativos'},
            {name:'2º Ano 2º Semestre', value:'[Algoritmia] Algoritmia e Estruturas de dados\n[BD] Base de Dados\n[CD] Comunicação de Dados\n[LAB3] Laboratório de Planeamento e Desenvolvimento de Software\n[MCE] Métodos Computacionais em Engenharia\n[MP3] Programação Multiplataforma',inline:false},
            { name: '\u200B', value: '\u200B' },
            {name:'3º Ano 1º Semestre',value:'[MP4] Engenharia Web\n[GPE] Gestão de Projetos em Engenharia\n[IA] Inteligência Artificial\n[LAB4] Laboratório de Aplicações Web e Bases de Dados\n[Redes] Redes de Computadores\n[SI] Sistemas de Informação',inline:false},
            {name:'3º Ano 2º Semestre',value:'[CG] Computação Gráfica\n[IPC] Interação Pessoa Computador\n[Projeto] Laboratório de Projeto em Engenharia Informática\n[MP5] Sistemas Distribuídos\n[TABD] Técnicas Avançadas de Bases de Dados',inline:false},
            { name: '\u200B', value: '\u200B' },
            {name:'4º Ano 1º Semestre',value:'[APS] Arquitetura e padrões de software\n[IO] Investigação operacional\n[AS] Administração de sistemas\n[Crowdsourcing] Crowdsourcing\n[Deeplearning] Deeplearning aplicado\n[DJD] Desenvolvimento de jogos digitais\n[Interfaces] Interfaces inteligentes\n[PDI] Processamento digital de imagem\n[Redes2] Redes e serviços de comunicações móveis\n[SIA] Sistemas de informação avançados',inline:false},
            {name:'4º Ano 2º Semestre',value:'[IS] Integração de sistemas\n[LAB] Laboratório de empreendedorismo\n[BI] Business intelligence\n[CN] Computação natural\n[CU] Computação ubíqua\n[Criptografia] Criptografia e segurança de sistemas informáticos\n[DAM] Desenvolvimento de aplicações móveis\n[DRV] Desenvolvimento em realidade virtual\n[M3D] Modelação e animação 3d\n[VC] Visão por computador',inline:false},
            { name: '\u200B', value: '\u200B' },
            {name:'Turista',value:'[Turista] Quando já abandonaste a mui nobre UTAD',inline:false},
        )
        
        message.channel.send(embed2);
    }
}