import { Projeto } from "./projeto";

export class Usuario {

    email:string;
    nome:string;
    senha:string;
    repitaSenha:string;
    dataIngressoSistema:Date;
    funcaoExercida:string;
    projetos:Projeto[];
    
}
