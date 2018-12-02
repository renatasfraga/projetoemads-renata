import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { PlanoDeTeste } from '../classes/plano-de-teste';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class PlanoDeTesteService {

  PLANO_URL = 'http://localhost:8081/plano-de-teste/';

  constructor(private http: HttpClient) { }

  getPlanoById(id:number) {
    return this.http.get<PlanoDeTeste>(this.PLANO_URL+id);
  }

  savePlano(plano) : Observable<PlanoDeTeste> {
    return this.http.post<PlanoDeTeste>(this.PLANO_URL,plano,httpOptions);
  }

  updatePlano(plano): Observable<any> {
    return this.http.put<PlanoDeTeste>(this.PLANO_URL,plano,httpOptions)
  }

  deletePlano(id:number) {
    return this.http.delete<PlanoDeTeste>(this.PLANO_URL+id);
  }

  getAllPlanos(){
    return this.http.get<PlanoDeTeste[]>(this.PLANO_URL);
  }

  getPlanoByProjeto(id:number) {
    return this.http.get<PlanoDeTeste[]>(this.PLANO_URL+"byprojeto/"+id);
  }

  getPlanoByTitulo(idProjeto:number, titulo:string) {
    return this.http.get<PlanoDeTeste[]>(this.PLANO_URL+idProjeto+"/"+titulo);
  }
}
