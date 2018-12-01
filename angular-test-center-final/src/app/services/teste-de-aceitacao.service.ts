import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { TesteDeAceitacao } from '../classes/teste-de-aceitacao';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class TesteDeAceitacaoService {

  TESTE_URL = 'http://localhost:8081/teste-aceitacao/';


  constructor(private http: HttpClient) { }

  getTesteById(idHistoria:number,idCriterio:number,idTeste:number) {
    return this.http.get<TesteDeAceitacao>(this.TESTE_URL+idHistoria+"/"+idCriterio+"/"+idTeste);
  }

  saveTeste(teste) : Observable<TesteDeAceitacao> {
    return this.http.post<TesteDeAceitacao>(this.TESTE_URL,teste,httpOptions);
  }

  updateTeste(teste): Observable<any> {
    return this.http.put<TesteDeAceitacao>(this.TESTE_URL,teste,httpOptions)
  }

  deleteTeste(idHistoria:number,idCriterio:number, idTeste:number) {
    return this.http.delete<TesteDeAceitacao>(this.TESTE_URL+idHistoria+"/"+idCriterio+"/"+idTeste);
  }

  getAllTestes(){
    return this.http.get<TesteDeAceitacao[]>(this.TESTE_URL);
  }

  getTesteByProjeto(id:number) {
    return this.http.get<TesteDeAceitacao[]>(this.TESTE_URL+"byprojeto/"+id);
  }

  getTesteByProjetoCriterioHistoria(idHistoria:number,idCriterio:number,idProjeto:number) {
    return this.http.get<TesteDeAceitacao[]>(this.TESTE_URL+"byteste/"+idHistoria+"/"+idCriterio+"/"+idProjeto);
  }

  getTesteByHistoria(idHistoria:number) {
    return this.http.get<TesteDeAceitacao[]>(this.TESTE_URL+"byhistoria/"+idHistoria);
  }

  getTesteByCriterio(idLinhaCriteiro:number) {
    return this.http.get<TesteDeAceitacao[]>(this.TESTE_URL+"bycriterio/"+idLinhaCriteiro);
  }
}
