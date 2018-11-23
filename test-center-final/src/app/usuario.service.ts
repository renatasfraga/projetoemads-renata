import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  USUARIO_URL = 'http://localhost:8081/usuario';
  usuarioLogado: Usuario;

   constructor(private http: HttpClient) { }


  getLogin(email: string, senha: string) {
    this.http.get<Usuario>(this.USUARIO_URL+"/login/"+email+"/"+senha)
                                   .subscribe(resultado => {
                                      this.usuarioLogado = resultado;
                                   });
    return this.http.get<Usuario>(this.USUARIO_URL+"/login/"+email+"/"+senha);
  }

  getAllUsuariosByNome(nome:string) {
    return this.http.get<Usuario>(this.USUARIO_URL+"/bynome/"+nome);
  }
  
}
