import { Projeto } from "./projeto";
import { Usuario } from "./usuario";

export class Lembrete {
    id:number;
    texto:string;
    projeto:Projeto;
    usuario:Usuario;
    dhPostagem:Date;
    
}
