import { Component, OnInit } from '@angular/core';
import { HistoriaDeUsuario } from '../classes/historia-de-usuario';
import { UsuarioService } from '../services/usuario.service';
import { ProjetoService } from '../services/projeto.service';
import { HistoriaDeUsuarioService } from '../services/historia-de-usuario.service';
import { Usuario } from '../classes/usuario';

@Component({
  selector: 'app-historia-editar',
  templateUrl: './historia-editar.component.html',
  styleUrls: ['./historia-editar.component.css']
})
export class HistoriaEditarComponent implements OnInit {

  historia: HistoriaDeUsuario = new HistoriaDeUsuario();
  usuariosByProjeto:Usuario[] = [];

  constructor(private usuarioService:UsuarioService,
              private projetoService:ProjetoService,
              private historiaService:HistoriaDeUsuarioService) { }

  ngOnInit() {
    this.carregarUsuarios();
  }

  salvar() {
    this.historia.projeto = this.projetoService.projetoSelecionado;
    this.historia.usuarioAtualizador = this.usuarioService.usuarioLogado;
    this.historiaService.saveHistoria(this.historia).subscribe( res => {
      if(res.id) {
        alert("Registro alterado com sucesso");
      } else {
        alert("Registro incluído com sucesso!");
      }
    });
  }

  carregarUsuarios() {
    this.usuarioService.getUsuariosByProjeto(this.projetoService.projetoSelecionado.id)
        .subscribe( res => {
          this.usuariosByProjeto = res;
        });
  }
}
