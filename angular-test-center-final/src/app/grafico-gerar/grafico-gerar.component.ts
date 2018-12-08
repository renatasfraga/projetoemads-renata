import { Component, OnInit, Inject } from '@angular/core';
import { ProjetoService } from '../services/projeto.service';
import { UsuarioService } from '../services/usuario.service';
import { GraficoService } from '../services/grafico.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Grafico } from '../classes/grafico';
import { GraficoAux } from '../classes/grafico-aux';


@Component({
  selector: 'app-grafico-gerar',
  templateUrl: './grafico-gerar.component.html',
  styleUrls: ['./grafico-gerar.component.css']
})
export class GraficoGerarComponent implements OnInit {

  ngOnInit() {
    
    if(this.data.grafico.tipoConsulta == 'GC') {
      if(this.data.grafico.tipoGrafico == 'pie') {
          this.graficoService.gerarGraficoCriticidade(this.projetoService.projetoSelecionado.id)
              .subscribe(e => {
                this.graficoAux = e;
                this.graficoAux.forEach(res => {
                  this.pieChartLabels.push(res.label);
                  this.pieChartData.push(res.valor);
                })
          });
        } else {
          this.graficoService.gerarGraficoCriticidade(this.projetoService.projetoSelecionado.id)
          .subscribe(e => {
            this.graficoAux = e;
          });
        }
      }
  }


  country:string;
  graficoAux: GraficoAux[];             
 
  //pie
  public pieChartLabels:string[] = [];

  public pieChartData:number[] = [];
  public pieChartType:string = 'pie';
             


  // Doughnut
  public doughnutChartLabels:string[] = [];
  public doughnutChartData:number[] = [];
  public doughnutChartType:string = 'doughnut';
 
//bar
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
 
  public barChartData:any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];
 

  constructor(private projetoService:ProjetoService,
              private usuarioService:UsuarioService,
              private graficoService:GraficoService) { }

  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
}
