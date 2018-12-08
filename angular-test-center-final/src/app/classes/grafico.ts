import { Projeto } from "./projeto";
import { Usuario } from "./usuario";

export class Grafico {

    id:number;
    tipoConsulta:string;
    tipoGrafico:string;
    projeto:Projeto;
    usuarioCriador:Usuario;
    usuarioAux:Usuario;
    titulo:string;

}
