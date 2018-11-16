import { Usuario } from "./usuario";
import { Time } from "@angular/common";

export class UserStory {
    id:number;
    titulo:string;
    descricao:string;
    dataCriacao:Date;
    tempoEstimado:Time;
    tempoDecorrido:Time;
    usuarioCriador:Usuario;
    usuarioAtualizador:Usuario;
    parecerQualidade:string;
    descricaoParecer:string;
}
