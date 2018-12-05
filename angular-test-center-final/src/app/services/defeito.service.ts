import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Defeito } from '../classes/defeito';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class DefeitoService {

  DEFEITO_URL = 'http://localhost:8081/defeito/';
  constructor(private http: HttpClient) { }

  getDefeitoById(id:number) {
    return this.http.get<Defeito>(this.DEFEITO_URL+id);
  }

  saveDefeito(plano) : Observable<Defeito> {
    return this.http.post<Defeito>(this.DEFEITO_URL,plano,httpOptions);
  }

  updateDefeito(plano): Observable<any> {
    return this.http.put<Defeito>(this.DEFEITO_URL,plano,httpOptions)
  }

  deleteDefeito(id:number) {
    return this.http.delete<Defeito>(this.DEFEITO_URL+id);
  }

  getAllDefeitos(){
    return this.http.get<Defeito[]>(this.DEFEITO_URL);
  }

  getDefeitoByProjeto(id:number) {
    return this.http.get<Defeito[]>(this.DEFEITO_URL+"byprojeto/"+id);
  }

  getDefeitoByNivelTitulo(id:number, nivel:string, titulo:string) {
    return this.http.get<Defeito[]>(this.DEFEITO_URL+"byniveltitulo/"+id+"/"+nivel+"/"+titulo);
  }

  getDefeitoByNivel(id:number,nivel:string) {
    return this.http.get<Defeito[]>(this.DEFEITO_URL+"bynivel/"+id+"/"+nivel);
  }

  getDefeitoByTitulo(id:number, titulo:string) {
    return this.http.get<Defeito[]>(this.DEFEITO_URL+"bytitulo/"+id+"/"+titulo);
  }
}
