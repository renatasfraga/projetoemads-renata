import { Usuario } from "./usuario";

export class UserStory {

    private id:number;
    private titulo:string;
    private descricao:string;
    private dataCriacao:Date;
    private tempoEstimado:Date;
    private tempoDecorrido:Date;
    private usuarioCriador:Usuario;
    private usuarioAtualizador: Usuario;    
    private parecerQualidade:string;
    private descricaoParecer:string;

    constructor() {}

}
