module.exports = {
    name:'study',
    description:"Estudar cadeira",
    execute(message,args){ 
        for (let i = 0; i < args.length; i++) {
            if(args[i]=='1ano1sem')
            {
                message.member.roles.add('764188400432709692').catch(console.error);
                message.member.roles.add('764188469831925760').catch(console.error);
                message.member.roles.add('764189076999503953').catch(console.error);
                message.member.roles.add('764189163658280970').catch(console.error);
                message.member.roles.add('764189197942259742').catch(console.error);
                message.member.roles.add('764189243534606396').catch(console.error);
                message.channel.send( message.member.user.tag + " Começou a estudar 1º Ano 1º Semestre")
            }

            if(args[i]=='1ano2sem')
            {
                message.member.roles.add('764189301788377138').catch(console.error);
                message.member.roles.add('764189365537603635').catch(console.error);
                message.member.roles.add('764189440754319431').catch(console.error);
                message.member.roles.add('764275350825205792').catch(console.error);
                message.member.roles.add('764189471120818196').catch(console.error);
                message.member.roles.add('764189568744161290').catch(console.error); 
                message.channel.send( message.member.user.tag + " Começou a estudar 1º Ano 2º Semestre")
            }

            if(args[i]=='2ano1sem')
            {
                message.member.roles.add('764189786201128970').catch(console.error);
                message.member.roles.add('764189902228422698').catch(console.error);
                message.member.roles.add('764189929554706452').catch(console.error);
                message.member.roles.add('764190086321274910').catch(console.error);
                message.member.roles.add('764190176188563487').catch(console.error);
                message.channel.send( message.member.user.tag + " Começou a estudar 2º Ano 1º Semestre")
            }
            if(args[i]=='2ano2sem')
            {
                message.member.roles.add('764190244844077076').catch(console.error);
                message.member.roles.add('764190289937432578').catch(console.error);
                message.member.roles.add('764190322473304135').catch(console.error);
                message.member.roles.add('764190347814764604').catch(console.error);
                message.member.roles.add('764190384359866389').catch(console.error);
                message.member.roles.add('764190432154353676').catch(console.error); 
                message.channel.send( message.member.user.tag + " Começou a estudar 2º Ano 2º Semestre")
            }
            if(args[i]=='3ano1sem')
            {
                message.member.roles.add('764191911799029840').catch(console.error);
                message.member.roles.add('764191628834504744').catch(console.error);
                message.member.roles.add('764191748372824084').catch(console.error);
                message.member.roles.add('764191793247158282').catch(console.error);
                message.member.roles.add('764191816945762355').catch(console.error);
                message.member.roles.add('764191866224508958').catch(console.error); 
                message.channel.send( message.member.user.tag + " Começou a estudar 3º Ano 1º Semestre")
            }
            if(args[i]=='3ano2sem')
            {
                message.member.roles.add('764191989926199328').catch(console.error);
                message.member.roles.add('764192030854348893').catch(console.error);
                message.member.roles.add('764192059727806526').catch(console.error);
                message.member.roles.add('764192102237077534').catch(console.error);
                message.member.roles.add('764192127655215134').catch(console.error);
                message.channel.send( message.member.user.tag + " Começou a estudar 3º Ano 2º Semestre")
            }
            if(args[i]=='4ano1sem')
            {
                message.member.roles.add('764193204890894416').catch(console.error);
                message.member.roles.add('764193269659598879').catch(console.error);
                message.channel.send( message.member.user.tag + " Começou a estudar 4º Ano 1º Semestre")
            }
            if(args[i]=='4ano2sem')
            {
                message.member.roles.add('764194104765972560').catch(console.error);
                message.member.roles.add('764194182951600158').catch(console.error);
                message.channel.send( message.member.user.tag + " Começou a estudar 4º Ano 2º Semestre")
            }
            switch (args[i]) {
                case 'AS':
                    message.member.roles.add('764193304392237117').catch(console.error0);
                    break;
                case 'APS':
                    message.member.roles.add('764193204890894416').catch(console.error0);
                    break;
                case 'Crowdsourcing':
                    message.member.roles.add('764193375019860039').catch(console.error0);
                    break;
                case 'Deeplearning':
                    message.member.roles.add('764193422616559616').catch(console.error0);
                    break;
                case 'DJD':
                    message.member.roles.add('764193468498968626').catch(console.error0);
                    break;
                case 'Interfaces':
                    message.member.roles.add('764193508033953897').catch(console.error0);
                    break;
                case 'IO':
                    message.member.roles.add('764193269659598879').catch(console.error0);
                    break;
                case 'PDI':
                    message.member.roles.add('764193572957585490').catch(console.error0);
                    break;
                case 'Redes2':
                    message.member.roles.add('764193599704399892').catch(console.error0);
                    break;
                case 'SIA':
                    message.member.roles.add('764193627080884264').catch(console.error0);
                    break;
                case 'IS':
                    message.member.roles.add('764194104765972560').catch(console.error0);
                    break;
                case 'LAB':
                    message.member.roles.add('764194182951600158').catch(console.error0);
                    break;
                case 'BI':
                    message.member.roles.add('764194215398735873').catch(console.error0);
                    break;
                case 'CN':
                    message.member.roles.add('764194246441828374').catch(console.error0);
                    break;
                case 'CU':
                    message.member.roles.add('764194270969856010').catch(console.error0);
                    break;
                case 'DAM':
                    message.member.roles.add('764194299197653023').catch(console.error0);
                    break;
                case 'DRV':
                    message.member.roles.add('764194334530076683').catch(console.error0);
                    break;
                case 'M3D':
                    message.member.roles.add('764194366121967647').catch(console.error0);
                    break;
                case 'VC':
                    message.member.roles.add('764194403425320980').catch(console.error0);
                    break;
                case 'MP4':
                    message.member.roles.add('764191911799029840').catch(console.error0);
                    break;
                case 'GPE':
                    message.member.roles.add('764191628834504744').catch(console.error0);
                    break;
                case 'IA':
                    message.member.roles.add('764191748372824084').catch(console.error0);
                    break;
                case 'LAB4':
                    message.member.roles.add('764191793247158282').catch(console.error0);
                    break;
                case 'Redes':
                    message.member.roles.add('764191816945762355').catch(console.error0);
                    break;
                case 'SI':
                    message.member.roles.add('764191866224508958').catch(console.error0);
                    break;
                case 'CG':
                    message.member.roles.add('764191989926199328').catch(console.error0);
                    break;
                case 'IPC':
                    message.member.roles.add('764192030854348893').catch(console.error0);
                    break;
                case 'Projeto':
                    message.member.roles.add('764192059727806526').catch(console.error0);
                    break;
                case 'MP5':
                    message.member.roles.add('764192102237077534').catch(console.error0);
                    break;
                case 'TABD':
                    message.member.roles.add('764192127655215134').catch(console.error0);
                    break;
                case 'Arquitetura':
                     message.member.roles.add('764189786201128970').catch(console.error0);
                    break;
                case 'Compiladores':
                    message.member.roles.add('764189902228422698').catch(console.error0);
                    break;
                case 'Eng.Software':
                    message.member.roles.add('764189929554706452').catch(console.error0);
                    break;
                case 'ME':
                    message.member.roles.add('764190086321274910').catch(console.error0);
                    break;
                case 'SO':
                    message.member.roles.add('764190176188563487').catch(console.error0);
                    break;
                case 'Algoritmia':
                    message.member.roles.add('764190244844077076').catch(console.error0);
                    break;
                case 'BD':
                    message.member.roles.add('764190289937432578').catch(console.error0);
                    break;
                case 'CD':
                    message.member.roles.add('764190322473304135').catch(console.error0);
                    break;
                case 'LAB3':
                    message.member.roles.add('764190347814764604').catch(console.error0);
                    break;
                case 'MCE':
                    message.member.roles.add('764190384359866389').catch(console.error0);
                    break;
                case 'MP3':
                    message.member.roles.add('764190432154353676').catch(console.error0);
                    break;
                case 'Álgebra':
                    message.member.roles.add('764188400432709692').catch(console.error0);
                    break;
                case 'Análise1':
                    message.member.roles.add('764188469831925760').catch(console.error0);
                    break;
                case 'MP1':
                    message.member.roles.add('764189163658280970').catch(console.error0);
                    break;
                case 'LAB1':
                    message.member.roles.add('764189076999503953').catch(console.error0);
                    break;
                case 'Seminário':
                    message.member.roles.add('764189197942259742').catch(console.error0);
                    break;
                case 'Tópicos':
                    message.member.roles.add('764189243534606396').catch(console.error0);
                    break;
                case 'Análise2':
                    message.member.roles.add('764189301788377138').catch(console.error0);
                    break;
                case 'Física':
                    message.member.roles.add('764189365537603635').catch(console.error0);
                    break;
                case 'ENO':
                    message.member.roles.add('764189440754319431').catch(console.error0);
                    break;
                case 'LAB2':
                    message.member.roles.add('764275350825205792').catch(console.error0);
                    break;
                case 'MP2':
                    message.member.roles.add('764189471120818196').catch(console.error0);
                    break;
                case 'SD':
                    message.member.roles.add('764189568744161290').catch(console.error0);
                    break;
                case 'OUT':
                    message.member.roles.add('764945006037303337').catch(console.error0);
                    message.channel.send( message.member.user.tag + " abandonou a UTAD :cry:")
                    break;
                default:
                    break;
            }
        }     
    }
}
