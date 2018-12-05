import { Usuario } from "./usuario";
import { Projeto } from "./projeto";

export class Defeito {
    id:number;
    titulo:string;
    conteudo:string;
    dataCriacao:string;
    usuarioCriador:Usuario;
    usuarioAtribuido:Usuario;
    status:string;
    projeto:Projeto;
    nivelDeCriticidade:string;    
}
