import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../classes/usuario';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  USUARIO_URL = 'http://localhost:8081/usuario/';
  usuarioLogado: Usuario;
  usuariosByProjeto: Usuario[];

  constructor(private http: HttpClient) { }


  updateUsuario(usuario): Observable<any> {
    return this.http.put<Usuario>(this.USUARIO_URL,usuario,httpOptions)
  }

  getUsuarioById(email:string) {
    return this.http.get<Usuario>(this.USUARIO_URL+email);
  }

  saveUsuario(usuario): Observable<Usuario>{
    return this.http.post<Usuario>(this.USUARIO_URL,usuario,httpOptions);
  }

  deleteUsuario(email:string) {
    return this.http.delete<Usuario>(this.USUARIO_URL+email);
  }

  getAllUsers() {
    return this.http.get<Usuario[]>(this.USUARIO_URL);
  }

  getLogin(email:string, senha:string) {
    return this.http.get<Usuario>(this.USUARIO_URL+"login/"+email+"/"+senha).subscribe(
      result => {
          this.usuarioLogado = result;
      }
    );
  }

  getUsuariosByProjeto(id:number) {
    return this.http.get<Usuario[]>(this.USUARIO_URL+"usuariosbyprojeto/"+id)
                    .subscribe(res => {
                      this.usuariosByProjeto = res;
                    });
  }

  listarUsuarioDisponiveis(id:number) {
    return this.http.get<Usuario[]>(this.USUARIO_URL+"listardisponiveis/"+id);
  }

}
