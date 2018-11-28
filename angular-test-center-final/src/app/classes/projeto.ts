import { Usuario } from "./usuario";

export class Projeto {

    id:number;
    nome:string;
    descricao:string;
    dataCriacao:Date;
    metodologiaDesenvolvimento:string;
    usuarioCriador:Usuario;
    usuarios:Usuario[];
    



}
