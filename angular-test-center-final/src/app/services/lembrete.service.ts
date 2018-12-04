import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Lembrete } from '../classes/lembrete';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class LembreteService {

  LEMBRETE_URL = 'http://localhost:8081/lembrete/';

  constructor(private http: HttpClient) { }

  getLembreteById(id:number) {
    return this.http.get<Lembrete>(this.LEMBRETE_URL+id);
  }

  saveLembrete(lembrete) : Observable<Lembrete> {
    return this.http.post<Lembrete>(this.LEMBRETE_URL,lembrete,httpOptions);
  }


  deleteLembrete(id:number) {
    return this.http.delete<Lembrete>(this.LEMBRETE_URL+id);
  }

  getAllLembretes(){
    return this.http.get<Lembrete[]>(this.LEMBRETE_URL);
  }

  getLembreteByProjeto(id:number) {
    return this.http.get<Lembrete[]>(this.LEMBRETE_URL+"byprojeto/"+id);
  }

}
