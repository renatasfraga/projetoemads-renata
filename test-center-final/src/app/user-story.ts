import { Usuario } from "./usuario";

export class UserStory {

     id:number;
     titulo:string;
     descricao:string;
     dataCriacao:Date;
     tempoEstimado:Date;
     tempoDecorrido:Date;
     usuarioCriador:Usuario;
     usuarioAtualizador: Usuario;    
     parecerQualidade:string;
     descricaoParecer:string;

    constructor() {}

}
