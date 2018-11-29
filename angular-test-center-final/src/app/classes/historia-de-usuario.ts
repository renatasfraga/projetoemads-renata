import { Usuario } from "./usuario";
import { Projeto } from "./projeto";

export class HistoriaDeUsuario {

    id:number;
    titulo:string;
    descricao:string;
    dataCriacao:string;
    tempoEstimado:string;
    tempoDecorrido:string;
    usuarioCriador:Usuario;
    usuarioAtualizador: Usuario;
    parecerQualidade:string;
    descricaoParecer:string;
    projeto:Projeto;

}
