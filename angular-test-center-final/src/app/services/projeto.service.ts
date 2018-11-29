import { Injectable } from '@angular/core';
import { Projeto } from '../classes/projeto';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Basic my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ProjetoService {

  PROJETO_URL = 'http://localhost:8081/projeto/';
  projetoSelecionado: Projeto;
  projetos: Projeto[] = [];

  constructor(private http: HttpClient) { }

  getProjetoById(id:number) {
    return this.http.get<Projeto>(this.PROJETO_URL+id);
  }
  saveProjeto(projeto:Projeto) {
    return this.http.post<Projeto>(this.PROJETO_URL,projeto);
  }

  deleteProjeto(id:number) {
    return this.http.delete<Projeto>(this.PROJETO_URL+id);
  }

  getAllProjetos(){
    return this.http.get<Projeto[]>(this.PROJETO_URL);
  }

  getProjetosByUsuario(email:string) {
    return this.http.get<Projeto[]>(this.PROJETO_URL+"projetobyuser/"+email)
               .subscribe( res => {
                  this.projetos = res;
               });
  }

  getProjetoByIdSelect(id:number) {
    return this.http.get<Projeto>(this.PROJETO_URL+id)
                    .subscribe( e => {
                      this.projetoSelecionado = e;
                    });
  }
}
