import { Time } from "@angular/common";
import { Usuario } from "./Usuario";

export class UserStory {
     id:number;
     titulo:string;
     descricao:string;
     dataCriacao:Date;
     tempoEstimado:Time;
     tempoDecorrido:Time;
     usuarioCriador:Usuario;
     usuarioAtualizador:Usuario;
     parecerQualidade:String;
     descricaoParecer:string;
}
