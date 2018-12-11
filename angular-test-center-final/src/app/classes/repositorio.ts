import { Usuario } from "./usuario";
import { Projeto } from "./projeto";

export class Repositorio {
    id:number;
    titulo:string;
    conteudo:string;
    formato:string;
    dataCriacao:Date;
    usuarioCriador:Usuario;
    projeto:Projeto;

}

