import { HistoriaDeUsuario } from "./historia-de-usuario";
import { CriterioPk } from "./criterio-pk";
import { Usuario } from "./usuario";

export class CriterioAceitacao {

    id:CriterioPk;
    idOrdenacao:number;
    descricaoLinha:string;
    usuarioCriador:Usuario;
    usuarioAux:string;
    usuarioAtualizador: Usuario;

}
