import { Component, OnInit } from '@angular/core';
import { PlanoDeTeste } from '../classes/plano-de-teste';
import { PlanoDeTesteService } from '../services/plano-de-teste.service';
import { ProjetoService } from '../services/projeto.service';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-plano-listar',
  templateUrl: './plano-listar.component.html',
  styleUrls: ['./plano-listar.component.css']
})
export class PlanoListarComponent implements OnInit {

  titulo:string;
  planoList:PlanoDeTeste[];

  displayedColumns: string[] = ['id', 'titulo', 'criador', 'data', 'passou','editarexcluir'];


  constructor(private projetoService:ProjetoService,
              private usuarioService:UsuarioService,
              private planoService:PlanoDeTesteService) { }

  ngOnInit() {
    this.carregarGridOnInit();
  }

  buscar(titulo:string) {
    if(titulo) {
      this.planoService.getPlanoByTitulo(this.projetoService.projetoSelecionado.id, titulo)
          .subscribe(e => {
             this.planoList = e;
          });
    } else {
      this.carregarGridOnInit();
    }
  }

  carregarGridOnInit() {
    this.planoService.getPlanoByProjeto(this.projetoService.projetoSelecionado.id)
        .subscribe(e => {
            this.planoList = e;
        });
  }

  remover(id:number) {
    if(confirm("Tem certeza que deseja remover?")) {
      this.planoService.deletePlano(id)
          .subscribe( e => {
            this.carregarGridOnInit();
            alert("Exclusão efetuada com sucesso!");
          }, (err) => {
            console.log(err);
      });
    } else {
      alert("Exclusão cancelada.");
    }
  }
}
