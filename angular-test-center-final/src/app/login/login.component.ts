import { Component, OnInit } from '@angular/core';
import { Usuario } from '../classes/usuario';
import { UsuarioService } from '../services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario:Usuario = new Usuario();
  mostraAlerta:boolean = false;
 
  constructor(private usuarioService:UsuarioService, private router:Router) { }

  ngOnInit() { }

  logarSe() {
    this.usuarioService.getLogin(this.usuario.email,this.usuario.senha);
    if(this.usuarioService.usuarioLogado) {
      this.router.navigate(['/projeto-selecionar']);
    } else {
      this.mostraAlerta = true;
    }
  }
}
