import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from './Usuario';


 
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuarioUrl = 'http://localhost:8081/usuario/';

  constructor(private http: HttpClient) { }

public getUsers() {
  return this.http.get<Usuario[]>(this.usuarioUrl);
}


}
