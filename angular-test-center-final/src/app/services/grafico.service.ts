import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { GraficoAux } from '../classes/grafico-aux';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class GraficoService {

  
  GRAFICO_URL = 'http://localhost:8081/grafico/';

  constructor(private http: HttpClient) { }

  gerarGraficoCriticidade(id:number) {
    return this.http.get<GraficoAux[]>(this.GRAFICO_URL+"criticidade/"+id);
  }
}
