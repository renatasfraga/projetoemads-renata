import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Membro } from '../classes/membro';
import { Observable } from 'rxjs';
import { Usuario } from '../classes/usuario';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class MembroService {

  MEMBRO_URL = 'http://localhost:8081/membro/';
  
  constructor(private http: HttpClient) { }

  getMembroById(id:number, email:string) {
    return this.http.get<Membro>(this.MEMBRO_URL+id+"/"+email);
  }

  saveMembro(membro) : Observable<Membro> {
    return this.http.post<Membro>(this.MEMBRO_URL,membro,httpOptions);
  }

  updateMembro(membro): Observable<any> {
    return this.http.put<Membro>(this.MEMBRO_URL,membro,httpOptions)
  }
  deleteMembro(id:number, email:string) {
    return this.http.delete<Membro>(this.MEMBRO_URL+id+"/"+email);
  }

  getAllMembros(){
    return this.http.get<Membro[]>(this.MEMBRO_URL);
  }

  listarMembros(id:number) {
    return this.http.get<Usuario[]>(this.MEMBRO_URL+"listarmembros/"+id);
  }
  
}
