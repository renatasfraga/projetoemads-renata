import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { ProjetoService } from '../services/projeto.service';
import { Projeto } from '../classes/projeto';
import { Router } from '@angular/router';
import {FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-projeto-selecionar',
  templateUrl: './projeto-selecionar.component.html',
  styleUrls: ['./projeto-selecionar.component.css']
})
export class ProjetoSelecionarComponent implements OnInit {
  
  projetoSelect: Projeto;
  mostrarAlerta: boolean = false;
  projetoControl = new FormControl('', [Validators.required]);
  
  constructor(private usuarioService: UsuarioService, 
              private projetoService:ProjetoService,
              private router:Router) {

   }

  ngOnInit() {
    this.projetoService.getProjetosByUsuario(this.usuarioService.usuarioLogado.email);
  }

  acessarProjeto() {
    this.projetoService.projetoSelecionado = this.projetoSelect;
    if(this.projetoService.projetoSelecionado) {
      this.router.navigate(['/lembretes']);
    } else {
      this.mostrarAlerta = true;
    }
  }

  

}
