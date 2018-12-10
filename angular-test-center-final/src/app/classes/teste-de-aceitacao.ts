import { TestePk } from "./teste-pk";
import { Usuario } from "./usuario";

export class TesteDeAceitacao {

    id:TestePk;
    idOrdenacao:number;
    titulo:string;
    descricaoLinha:string;
    passou:boolean;
    usuarioCriador:Usuario;
    usuarioAtualizador:Usuario;
}
