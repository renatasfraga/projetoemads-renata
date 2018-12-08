import { Component, OnInit } from '@angular/core';
import { ProjetoService } from '../services/projeto.service';
import { UsuarioService } from '../services/usuario.service';
import { GraficoService } from '../services/grafico.service';
import { GraficoAux } from '../classes/grafico-aux';
import { Grafico } from '../classes/grafico';
import { MatDialog } from '@angular/material/dialog';
import { GraficoIncluirComponent } from '../grafico-incluir/grafico-incluir.component';
import { GraficoEditarComponent } from '../grafico-editar/grafico-editar.component';
import { GraficoGerarComponent } from '../grafico-gerar/grafico-gerar.component';

@Component({
  selector: 'app-grafico-listar',
  templateUrl: './grafico-listar.component.html',
  styleUrls: ['./grafico-listar.component.css']
})
export class GraficoListarComponent implements OnInit {

  graficoList:Grafico[];
  displayedColumns: string[] = ['id', 'tipoconsulta', 'tipografico', 'criador', 'editarexcluir'];
  usuario:string;

  constructor(private projetoService:ProjetoService,
              private usuarioService:UsuarioService,
              private graficoService:GraficoService,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.usuarioService.getUsuariosByProjeto(this.projetoService.projetoSelecionado.id);
    this.carregarGridOnInit();
    
  }
  
  carregarGridOnInit() {
    this.graficoService.getGraficoByProjeto(this.projetoService.projetoSelecionado.id) 
        .subscribe(e => {
          this.graficoList = e;
        });
  }

  buscar(usuario) {
    if(usuario) {
      this.graficoService.pesquisarPorCriador(this.projetoService.projetoSelecionado.id,usuario)
          .subscribe(e => {
            this.graficoList = e;
          });
    } else {
      this.carregarGridOnInit();
    }
  }

  openNovo() {
    const dialogRef = this.dialog.open(GraficoIncluirComponent, {
      width:'650px'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.carregarGridOnInit();
    });
  }

    openGerar(grafico:Grafico) {
     
      const dialogRef = this.dialog.open(GraficoGerarComponent, {
        width:'900px',
        data: {
          grafico: grafico,
        }
      });
    }

  remover(id:number) {
    if(confirm("Tem certeza que deseja remover?")) {
      this.graficoService.deleteGrafico(id)
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
