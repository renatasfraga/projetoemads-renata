import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { GraficoAux } from '../classes/grafico-aux';
import { Grafico } from '../classes/grafico';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class GraficoService {

  
  GRAFICO_URL = 'http://localhost:8081/grafico/';

  constructor(private http: HttpClient) { }

  getGraficoById(id:number) {
    return this.http.get<Grafico>(this.GRAFICO_URL+id);
  }

  saveGrafico(grafico) : Observable<Grafico> {
    return this.http.post<Grafico>(this.GRAFICO_URL,grafico,httpOptions);
  }

  updateGrafico(grafico): Observable<any> {
    return this.http.put<Grafico>(this.GRAFICO_URL,grafico,httpOptions)
  }

  deleteGrafico(id:number) {
    return this.http.delete<Grafico>(this.GRAFICO_URL+id);
  }

  getAllGraficos(){
    return this.http.get<Grafico[]>(this.GRAFICO_URL);
  }

  getGraficoByProjeto(id:number) {
    return this.http.get<Grafico[]>(this.GRAFICO_URL+"byprojeto/"+id);
  }

  gerarGraficoCriticidade(id:number) {
    return this.http.get<GraficoAux[]>(this.GRAFICO_URL+"criticidade/"+id);
  }

  gerarGraficoPorQualidade(id:number) {
    return this.http.get<GraficoAux[]>(this.GRAFICO_URL+"qualidade/"+id);
  }

  gerarGraficoBugsPorMes(id:number) {
    return this.http.get<GraficoAux[]>(this.GRAFICO_URL+"bugspormes/"+id);
  }

  gerarGraficoPorCriador(email:string, id:number) {
    return this.http.get<GraficoAux[]>(this.GRAFICO_URL+"criador/"+email+"/"+id);
  }

  gerarGraficoPorAtribuido(email:string, id:number) {
    return this.http.get<GraficoAux[]>(this.GRAFICO_URL+"atribuido/"+email+"/"+id);
  }

  gerarGraficoStatus(id:number) {
    return this.http.get<GraficoAux[]>(this.GRAFICO_URL+id);
  }

  pesquisarPorCriador(id:number,email:string) {
    return this.http.get<Grafico[]>(this.GRAFICO_URL+"pesquisar/"+id+"/"+email);
  }

}
