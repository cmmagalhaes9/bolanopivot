module.exports = {
    name:'unstudy',
    description:"Não Estudar cadeira",
    execute(message,args){
        for (let i = 0; i < args.length; i++) {
            if(args[i]=='1ano1sem')
            {
                message.member.roles.remove('764188400432709692').catch(console.error);
                message.member.roles.remove('764188469831925760').catch(console.error);
                message.member.roles.remove('764189076999503953').catch(console.error);
                message.member.roles.remove('764189163658280970').catch(console.error);
                message.member.roles.remove('764189197942259742').catch(console.error);
                message.member.roles.remove('764189243534606396').catch(console.error); 
                message.channel.send( message.member.user.tag + " Deixou de estudar 1º Ano 1º Semestre")
            }

            if(args[i]=='1ano2sem')
            {
                message.member.roles.remove('764189301788377138').catch(console.error);
                message.member.roles.remove('764189365537603635').catch(console.error);
                message.member.roles.remove('764189440754319431').catch(console.error);
                message.member.roles.remove('764275350825205792').catch(console.error);
                message.member.roles.remove('764189471120818196').catch(console.error);
                message.member.roles.remove('764189568744161290').catch(console.error); 
                message.channel.send( message.member.user.tag + " Deixou de estudar 1º Ano 2º Semestre")
            }

            if(args[i]=='2ano1sem')
            {
                message.member.roles.remove('764189786201128970').catch(console.error);
                message.member.roles.remove('764189902228422698').catch(console.error);
                message.member.roles.remove('764189929554706452').catch(console.error);
                message.member.roles.remove('764190086321274910').catch(console.error);
                message.member.roles.remove('764190176188563487').catch(console.error);
                message.channel.send( message.member.user.tag + " Deixou de estudar 2º Ano 1º Semestre")
            }
            if(args[i]=='2ano2sem')
            {
                message.member.roles.remove('764190244844077076').catch(console.error);
                message.member.roles.remove('764190289937432578').catch(console.error);
                message.member.roles.remove('764190322473304135').catch(console.error);
                message.member.roles.remove('764190347814764604').catch(console.error);
                message.member.roles.remove('764190384359866389').catch(console.error);
                message.member.roles.remove('764190432154353676').catch(console.error); 
                message.channel.send( message.member.user.tag + " Deixou de estudar 2º Ano 2º Semestre")
            }
            if(args[i]=='3ano1sem')
            {
                message.member.roles.remove('764191911799029840').catch(console.error);
                message.member.roles.remove('764191628834504744').catch(console.error);
                message.member.roles.remove('764191748372824084').catch(console.error);
                message.member.roles.remove('764191793247158282').catch(console.error);
                message.member.roles.remove('764191816945762355').catch(console.error);
                message.member.roles.remove('764191866224508958').catch(console.error); 
                message.channel.send( message.member.user.tag + " Deixou de estudar 3º Ano 1º Semestre")
            }
            if(args[i]=='3ano2sem')
            {
                message.member.roles.remove('764191989926199328').catch(console.error);
                message.member.roles.remove('764192030854348893').catch(console.error);
                message.member.roles.remove('764192059727806526').catch(console.error);
                message.member.roles.remove('764192102237077534').catch(console.error);
                message.member.roles.remove('764192127655215134').catch(console.error);
                message.channel.send( message.member.user.tag + " Deixou de estudar 3º Ano 2º Semestre")
            }
            if(args[i]=='4ano1sem')
            {
                message.member.roles.remove('764193204890894416').catch(console.error);
                message.member.roles.remove('764193269659598879').catch(console.error);
                message.channel.send( message.member.user.tag + " Deixou de estudar 4º Ano 1º Semestre")
            }
            if(args[i]=='4ano2sem')
            {
                message.member.roles.remove('764194104765972560').catch(console.error);
                message.member.roles.remove('764194182951600158').catch(console.error);
                message.channel.send( message.member.user.tag + " Deixou de estudar 4º Ano 2º Semestre")
            }
            switch (args[i]) {
                case 'AS':
                    message.member.roles.remove('764193304392237117').catch(console.error0);
                    message.channel.send( message.member.user.tag + " Deixou de estudar AS")
                    break;
                case 'APS':
                    message.member.roles.remove('764193204890894416').catch(console.error0);
                    message.channel.send( message.member.user.tag + " Deixou de estudar APS")
                    break;
                case 'Crowdsourcing':
                    message.member.roles.remove('764193375019860039').catch(console.error0);
                    message.channel.send( message.member.user.tag + " Deixou de estudar Crowdsourcing")
                    break;
                case 'Deeplearning':
                    message.member.roles.remove('764193422616559616').catch(console.error0);
                    message.channel.send( message.member.user.tag + " Deixou de estudar Deeplearning")
                    break;
                case 'DJD':
                    message.member.roles.remove('764193468498968626').catch(console.error0);
                    message.channel.send( message.member.user.tag + " Deixou de estudar DJD")
                    break;
                case 'Interfaces':
                    message.member.roles.remove('764193508033953897').catch(console.error0);
                    message.channel.send( message.member.user.tag + " Deixou de estudar Interfaces")
                    break;
                case 'IO':
                    message.member.roles.remove('764193269659598879').catch(console.error0);
                    message.channel.send( message.member.user.tag + " Deixou de estudar IO")
                    break;
                case 'PDI':
                    message.member.roles.remove('764193572957585490').catch(console.error0);
                    message.channel.send( message.member.user.tag + " Deixou de estudar PDI")
                    break;
                case 'Redes2':
                    message.member.roles.remove('764193599704399892').catch(console.error0);
                    message.channel.send( message.member.user.tag + " Deixou de estudar Redes2")
                    break;
                case 'SIA':
                    message.member.roles.remove('764193627080884264').catch(console.error0);
                    message.channel.send( message.member.user.tag + " Deixou de estudar SIA")
                    break;
                case 'IS':
                    message.member.roles.remove('764194104765972560').catch(console.error0);
                    message.channel.send( message.member.user.tag + " Deixou de estudar IS")
                    break;
                case 'LAB':
                    message.member.roles.remove('764194182951600158').catch(console.error0);
                    message.channel.send( message.member.user.tag + " Deixou de estudar LAB")
                    break;
                case 'BI':
                    message.member.roles.remove('764194215398735873').catch(console.error0);
                    message.channel.send( message.member.user.tag + " Deixou de estudar BI")
                    break;
                case 'CN':
                    message.member.roles.remove('764194246441828374').catch(console.error0);
                    message.channel.send( message.member.user.tag + " Deixou de estudar CN")
                    break;
                case 'CU':
                    message.member.roles.remove('764194270969856010').catch(console.error0);
                    message.channel.send( message.member.user.tag + " Deixou de estudar CU")
                    break;
                case 'DAM':
                    message.member.roles.remove('764194299197653023').catch(console.error0);
                    message.channel.send( message.member.user.tag + " Deixou de estudar DAM")
                    break;
                case 'DRV':
                    message.member.roles.remove('764194334530076683').catch(console.error0);
                    message.channel.send( message.member.user.tag + " Deixou de estudar DRV")
                    break;
                case 'M3D':
                    message.member.roles.remove('764194366121967647').catch(console.error0);
                    message.channel.send( message.member.user.tag + " Deixou de estudar M3D")
                    break;
                case 'VC':
                    message.member.roles.remove('764194403425320980').catch(console.error0);
                    message.channel.send( message.member.user.tag + " Deixou de estudar VC")
                    break;
                case 'MP4':
                    message.member.roles.remove('764191911799029840').catch(console.error0);
                    message.channel.send( message.member.user.tag + " Deixou de estudar MP4")
                    break;
                case 'GPE':
                    message.member.roles.remove('764191628834504744').catch(console.error0);
                    message.channel.send( message.member.user.tag + " Deixou de estudar GPE")
                    break;
                case 'IA':
                    message.member.roles.remove('764191748372824084').catch(console.error0);
                    message.channel.send( message.member.user.tag + " Deixou de estudar IA")
                    break;
                case 'LAB4':
                    message.member.roles.remove('764191793247158282').catch(console.error0);
                    message.channel.send( message.member.user.tag + " Deixou de estudar lAB4")
                    break;
                case 'Redes':
                    message.member.roles.remove('764191816945762355').catch(console.error0);
                    message.channel.send( message.member.user.tag + " Deixou de estudar Redes")
                    break;
                case 'SI':
                    message.member.roles.remove('764191866224508958').catch(console.error0);
                    message.channel.send( message.member.user.tag + " Deixou de estudar SI")
                    break;
                case 'CG':
                    message.member.roles.remove('764191989926199328').catch(console.error0);
                    message.channel.send( message.member.user.tag + " Deixou de estudar CG")
                    break;
                case 'IPC':
                    message.member.roles.remove('764192030854348893').catch(console.error0);
                    message.channel.send( message.member.user.tag + " Deixou de estudar IPC")
                    break;
                case 'Projeto':
                    message.member.roles.remove('764192059727806526').catch(console.error0);
                    message.channel.send( message.member.user.tag + " Deixou de estudar Projeto")
                    break;
                case 'MP5':
                    message.member.roles.remove('764192102237077534').catch(console.error0);
                    message.channel.send( message.member.user.tag + " Deixou de estudar MP5")
                    break;
                case 'TABD':
                    message.member.roles.remove('764192127655215134').catch(console.error0);
                    message.channel.send( message.member.user.tag + " Deixou de estudar TABD")
                    break;
                case 'Arquitetura':
                     message.member.roles.remove('764189786201128970').catch(console.error0);
                    message.channel.send( message.member.user.tag + " Deixou de estudar Arquitetura")
                    break;
                case 'Compiladores':
                    message.member.roles.remove('764189902228422698').catch(console.error0);
                    message.channel.send( message.member.user.tag + " Deixou de estudar Compiladores")
                    break;
                case 'Eng.Software':
                    message.member.roles.remove('764189929554706452').catch(console.error0);
                    message.channel.send( message.member.user.tag + " Deixou de estudar Engenharia de Software")
                    break;
                case 'ME':
                    message.member.roles.remove('764190086321274910').catch(console.error0);
                    message.channel.send( message.member.user.tag + " Deixou de estudar ME")
                    break;
                case 'SO':
                    message.member.roles.remove('764190176188563487').catch(console.error0);
                    message.channel.send( message.member.user.tag + " Deixou de estudar SO")
                    break;
                case 'Algoritmia':
                    message.member.roles.remove('764190244844077076').catch(console.error0);
                    message.channel.send( message.member.user.tag + " Deixou de estudar Algoritmia")
                    break;
                case 'BD':
                    message.member.roles.remove('764190289937432578').catch(console.error0);
                    message.channel.send( message.member.user.tag + " Deixou de estudar BD")
                    break;
                case 'CD':
                    message.member.roles.remove('764190322473304135').catch(console.error0);
                    message.channel.send( message.member.user.tag + " Deixou de estudar CD")
                    break;
                case 'LAB3':
                    message.member.roles.remove('764190347814764604').catch(console.error0);
                    message.channel.send( message.member.user.tag + " Deixou de estudar LAB3")
                    break;
                case 'MCE':
                    message.member.roles.remove('764190384359866389').catch(console.error0);
                    message.channel.send( message.member.user.tag + " Deixou de estudar MCE")
                    break;
                case 'MP3':
                    message.member.roles.remove('764190432154353676').catch(console.error0);
                    message.channel.send( message.member.user.tag + " Deixou de estudar MP3")
                    break;
                case 'Álgebra':
                    message.member.roles.remove('764188400432709692').catch(console.error0);
                    message.channel.send( message.member.user.tag + " Deixou de estudar Álgebra")
                    break;
                case 'Análise1':
                    message.member.roles.remove('764188469831925760').catch(console.error0);
                    message.channel.send( message.member.user.tag + " Deixou de estudar Análise")
                    break;
                case 'MP1':
                    message.member.roles.remove('764189163658280970').catch(console.error0);
                    message.channel.send( message.member.user.tag + " Deixou de estudar MP1")
                    break;
                case 'LAB1':
                    message.member.roles.remove('764189076999503953').catch(console.error0);
                    message.channel.send( message.member.user.tag + " Deixou de estudar LAB1")
                    break;
                case 'Seminário':
                    message.member.roles.remove('764189197942259742').catch(console.error0);
                    message.channel.send( message.member.user.tag + " Deixou de estudar Seminário")
                    break;
                case 'Tópicos':
                    message.member.roles.remove('764189243534606396').catch(console.error0);
                    message.channel.send( message.member.user.tag + " Deixou de estudar Tópicos")
                    break;
                case 'Análise2':
                    message.member.roles.remove('764189301788377138').catch(console.error0);
                    message.channel.send( message.member.user.tag + " Deixou de estudar Análise2")
                    break;
                case 'Física':
                    message.member.roles.remove('764189365537603635').catch(console.error0);
                    message.channel.send( message.member.user.tag + " Deixou de estudar Física")
                    break;
                case 'ENO':
                    message.member.roles.remove('764189440754319431').catch(console.error0);
                    message.channel.send( message.member.user.tag + " Deixou de estudar ENO")
                    break;
                case 'LAB2':
                    message.member.roles.remove('764275350825205792').catch(console.error0);
                    message.channel.send( message.member.user.tag + " Deixou de estudar LAB2")
                    break;
                case 'MP2':
                    message.member.roles.remove('764189471120818196').catch(console.error0);
                    message.channel.send( message.member.user.tag + " Deixou de estudar MP2")
                    break;
                case 'SD':
                    message.member.roles.remove('764189568744161290').catch(console.error0);
                    message.channel.send( message.member.user.tag + " Deixou de estudar SD")
                    break;
                case 'OUT':
                    message.member.roles.remove('764945006037303337').catch(console.error0);
                    
                    break;
                default:
                    break;
            }
        }
    }
}
