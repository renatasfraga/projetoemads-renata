import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Usuario } from '../usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private usuario: Usuario = new Usuario();
  private mostraMsgErro = false;
  private mensagemErro = "Usuário ou senha incorretos! ";

  constructor(private usuarioService : UsuarioService, private router: Router) { }

  ngOnInit() {}

  logar() {
    this.usuarioService.getLogin(this.usuario.email, this.usuario.senha)
                       .subscribe( resultado => {
                          if(resultado) {
                            this.router.navigate(['/home']);
                          } else {
                            this.mostraMsgErro = true;
                          }
                       });
    }

}
