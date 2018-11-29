import { Component, OnInit } from '@angular/core';
import { HistoriaDeUsuario } from '../classes/historia-de-usuario';
import { UsuarioService } from '../services/usuario.service';
import { ProjetoService } from '../services/projeto.service';
import { HistoriaDeUsuarioService } from '../services/historia-de-usuario.service';
import { Usuario } from '../classes/usuario';
import { Router, ActivatedRoute } from '@angular/router';

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
  idHistoria:number;
  dialogAlterar:boolean = false; 

  constructor(private usuarioService:UsuarioService,
              private projetoService:ProjetoService,
              private historiaService:HistoriaDeUsuarioService,
              private router : Router,
              private rotaAtiva: ActivatedRoute) { }

  ngOnInit() {
    this.idHistoria = this.rotaAtiva.snapshot.params['id'];

    if(isNaN(this.idHistoria)) {
      this.historia = new HistoriaDeUsuario();
      this.usuarioService.getUsuariosByProjeto(this.projetoService.projetoSelecionado.id);
      this.getCarregarSelectParecer();
    } else {
      this.historiaService.getHistoriaById(this.idHistoria);
    }
  }

  salvar() {
    this.historia.usuarioAtualizador = this.usuarioService.usuarioLogado;
    if(isNaN(this.idHistoria)) {
      this.historia.projeto = this.projetoService.projetoSelecionado;
      this.historiaService.saveHistoria(this.historia).subscribe( res => {
          alert("Registro incluído com sucesso.");
          this.router.navigate(['/historia-listar']);
      });
    } else {
      this.historiaService.saveHistoria(this.historia).subscribe( res => {
        this.dialogAlterar = true;
        this.router.navigate(['/historia-listar']);
    });
    }
   
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