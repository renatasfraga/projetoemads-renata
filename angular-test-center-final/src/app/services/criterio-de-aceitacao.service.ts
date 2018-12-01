import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { CriterioAceitacao } from '../classes/criterio-aceitacao';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class CriterioDeAceitacaoService {

  CRITERIO_URL = 'http://localhost:8081/criterio-aceitacao/';

  constructor(private http: HttpClient) { }

  getCriterioById(idHistoria:number,idCriterio:number) {
    return this.http.get<CriterioAceitacao>(this.CRITERIO_URL+idHistoria+"/"+idCriterio);
  }

  saveCriterio(criterio) : Observable<CriterioAceitacao> {
    return this.http.post<CriterioAceitacao>(this.CRITERIO_URL,criterio,httpOptions);
  }

  updateCriterio(criterio): Observable<any> {
    return this.http.put<CriterioAceitacao>(this.CRITERIO_URL,criterio,httpOptions)
  }

  deleteCriterio(idHistoria:number,idCriterio:number) {
    return this.http.delete<CriterioAceitacao>(this.CRITERIO_URL+idHistoria+"/"+idCriterio);
  }

  getAllCriterios(){
    return this.http.get<CriterioAceitacao[]>(this.CRITERIO_URL);
  }

  getCriterioByProjeto(id:number) {
    return this.http.get<CriterioAceitacao[]>(this.CRITERIO_URL+"byprojeto/"+id);
  }

  getCriterioByProjetoHistoria(idHistoria:number,idProjeto:number) {
    return this.http.get<CriterioAceitacao[]>(this.CRITERIO_URL+"byhistoria/"+idHistoria+"/"+idProjeto);
  }
  getCriterioByHistoria(idHistoria:number) {
    return this.http.get<CriterioAceitacao[]>(this.CRITERIO_URL+"criteriobyhistoria/"+idHistoria);
  }
}
