import { Component, OnInit } from '@angular/core';
import { HistoriaDeUsuario } from '../classes/historia-de-usuario';
import { UsuarioService } from '../services/usuario.service';
import { ProjetoService } from '../services/projeto.service';
import { HistoriaDeUsuarioService } from '../services/historia-de-usuario.service';
import { Usuario } from '../classes/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-historia-editar',
  templateUrl: './historia-editar.component.html',
  styleUrls: ['./historia-editar.component.css']
})
export class HistoriaEditarComponent implements OnInit {

  historia: HistoriaDeUsuario = new HistoriaDeUsuario();
  usuariosByProjeto:Usuario[] = [];
  usuarioSelect:Usuario;
  selectParecer:Parecer[];

  constructor(private usuarioService:UsuarioService,
              private projetoService:ProjetoService,
              private historiaService:HistoriaDeUsuarioService,
              private router : Router) { }

  ngOnInit() {
    this.usuarioService.getUsuariosByProjeto(this.projetoService.projetoSelecionado.id);
    this.getCarregarSelectParecer();
  
  }

  salvar() {
    this.historia.projeto = this.projetoService.projetoSelecionado;
    this.historia.usuarioAtualizador = this.usuarioService.usuarioLogado;
    this.historiaService.saveHistoria(this.historia).subscribe( res => {
        alert("Registro incluído com sucesso");
        this.router.navigate(['/historia-listar']);
     
    });
  }

  getCarregarSelectParecer() {
    this.selectParecer = [
      {value: 'I' , description: 'Insatisfeito'},
      {value: 'P' , description: 'Parcialmente Satisfeito'},
      {value: 'S' , description: 'Satisfeito'}
    ];
  }

 
}
export interface Parecer {
  value:string;
  description:string;
}