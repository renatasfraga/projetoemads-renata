import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Repositorio } from '../classes/repositorio';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class RepositorioService {

  REPOSITORIO_URL = 'http://localhost:8081/repositorio/';
  
  constructor(private http: HttpClient) { }

  getRepositorioById(id:number) {
    return this.http.get<Repositorio>(this.REPOSITORIO_URL+id);
  }

  saveRepositorio(repositorio) : Observable<Repositorio> {
    return this.http.post<Repositorio>(this.REPOSITORIO_URL,repositorio,httpOptions);
  }

  updateRepositorio(repositorio):  Observable<Repositorio> { 
    return this.http.put<Repositorio>(this.REPOSITORIO_URL,repositorio,httpOptions);
  }

  deleteRepositorio(id:number) {
    return this.http.delete<Repositorio>(this.REPOSITORIO_URL+id);
  }

  getAllRepositorios(){
    return this.http.get<Repositorio[]>(this.REPOSITORIO_URL);
  }

  getRepositorioByProjeto(id:number) {
    return this.http.get<Repositorio[]>(this.REPOSITORIO_URL+"byprojeto/"+id);
  }

  getRepositorioByTitulo(id:number, titulo:string) {
    return this.http.get<Repositorio[]>(this.REPOSITORIO_URL+"bytitulo/"+id+"/"+titulo);
  }
}
