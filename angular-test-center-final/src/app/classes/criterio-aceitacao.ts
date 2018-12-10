import { HistoriaDeUsuario } from "./historia-de-usuario";
import { CriterioPk } from "./criterio-pk";
import { Usuario } from "./usuario";

export class CriterioAceitacao {

    id:CriterioPk;
    idOrdenacao:number;
    titulo:string;
    descricaoLinha:string;
    usuarioCriador:Usuario;
    usuarioAux:string;
    historiaAux:number;
    usuarioAtualizador: Usuario;

}
