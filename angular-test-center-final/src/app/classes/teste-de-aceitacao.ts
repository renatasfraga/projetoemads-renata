import { TestePk } from "./teste-pk";
import { Usuario } from "./usuario";

export class TesteDeAceitacao {

    id:TestePk;
    idOrdenacao:number;
    descricaoLinha:string;
    passou:boolean;
    usuarioCriador:Usuario;
    usuarioAtualizador:Usuario;
}
