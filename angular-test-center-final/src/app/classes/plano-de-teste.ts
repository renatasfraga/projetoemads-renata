import { Usuario } from "./usuario";
import { Projeto } from "./projeto";

export class PlanoDeTeste {

    id:number;
    titulo:string;
    conteudo:string;
    dataCriacao:string;
    passou:boolean;
    usuarioCriador:Usuario;
    usuarioAtualizador:Usuario;
    projeto:Projeto;

}
