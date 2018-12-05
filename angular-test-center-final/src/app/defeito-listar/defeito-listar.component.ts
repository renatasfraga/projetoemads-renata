import { Component, OnInit } from '@angular/core';
import { ProjetoService } from '../services/projeto.service';
import { UsuarioService } from '../services/usuario.service';
import { DefeitoService } from '../services/defeito.service';
import { Defeito } from '../classes/defeito';

export interface Nivel {
  value: string;
  description:string;
}

@Component({
  selector: 'app-defeito-listar',
  templateUrl: './defeito-listar.component.html',
  styleUrls: ['./defeito-listar.component.css']
})
export class DefeitoListarComponent implements OnInit {

  criticidade:string;
  titulo:string; 
  defeitoList:Defeito[];
  displayedColumns: string[] = ['id', 'titulo', 'criador', 'data', 'status','editarexcluir'];

  niveis: Nivel[] = [
    {value: '1', description: 'Nível 1'},
    {value: '2', description: 'Nível 2'},
    {value: '3', description: 'Nível 3'},
    {value: '4', description: 'Nível 4'},
    {value: '5', description: 'Nível 5'},
  ];
  constructor(private projetoService:ProjetoService,
              private usuarioService:UsuarioService,
              private defeitoService:DefeitoService) { }

  ngOnInit() {
    this.carregarGridOnInit();
  }

  buscar() {
    if(this.criticidade && this.titulo) {
      this.defeitoService.getDefeitoByNivelTitulo(this.projetoService.projetoSelecionado.id,
                                                  this.criticidade, this.titulo)
          .subscribe(e=> {
            this.defeitoList = e;
          });
    } else if(this.criticidade && !this.titulo) {
      this.defeitoService.getDefeitoByNivel(this.projetoService.projetoSelecionado.id,
                                            this.criticidade)
          .subscribe(e => {
            this.defeitoList = e;
          });
    } else if(!this.criticidade && this.titulo) {
      this.defeitoService.getDefeitoByTitulo(this.projetoService.projetoSelecionado.id,
                                             this.titulo)
          .subscribe(e => {
              this.defeitoList = e;
          });
    } else {
      this.carregarGridOnInit();
    }
  }

  carregarGridOnInit() {
    this.defeitoService.getDefeitoByProjeto(this.projetoService.projetoSelecionado.id)
        .subscribe(e => {
          this.defeitoList = e;
        });
  }

  remover(id:number) {
    if(confirm("Tem certeza que deseja remover?")) {
      this.defeitoService.deleteDefeito(id)
          .subscribe(e => {
            this.carregarGridOnInit();
            alert("Exclusão efetuada com sucesso!");
        } , (err) => {
          console.log(err);
        });
    } else {
      alert("Exclusão cancelada.");
    } 
  }
}
