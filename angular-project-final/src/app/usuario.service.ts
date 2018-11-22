import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from './usuario';



@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  USUARIO_URL = 'http://localhost:8081/usuario';

   constructor(private http: HttpClient) { }


  getLogin(email: string, senha: string) {
    return this.http.get<Usuario>(this.USUARIO_URL+"/login/"+email+"/"+senha);
  }

  
}
