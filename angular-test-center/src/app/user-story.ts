import { Time } from "@angular/common";
import { Parecer } from "./parecer.enum";
import { User } from "./user";

export class UserStory {
    private id:number;
    private titulo:string;
    private descricao:string;
    private dataCriacao:Date;
    private tempoEstimado:Time;
    private tempoDecorrido:Time;
    private usuarioCriador:User;
    private usuarioAtualizador:User;
    private parecerQualidade:Parecer;
    private descricaoParecer:string;
}
