import { Component, OnInit } from '@angular/core';
import { ProjetoService } from '../services/projeto.service';
import { UsuarioService } from '../services/usuario.service';
import { GraficoService } from '../services/grafico.service';
import { GraficoAux } from '../classes/grafico-aux';

@Component({
  selector: 'app-grafico-listar',
  templateUrl: './grafico-listar.component.html',
  styleUrls: ['./grafico-listar.component.css']
})
export class GraficoListarComponent implements OnInit {

  public pieChartLabels:string[] = [];
  public pieChartData:number[] = [];

  public graficoAux: GraficoAux[];
  public pieChartType:string = 'pie';

  
  public chartColors: Array<any> = [
    { // all colors in order
      backgroundColor: ['#A569BD', '#58D68D','#F7DC6F','#E59866']
    }
]
 
  constructor(private projetoService:ProjetoService,
              private usuarioService:UsuarioService,
              private graficoService:GraficoService) { }

  ngOnInit() {

    this.graficoService.gerarGraficoCriticidade(this.projetoService.projetoSelecionado.id) 
        .subscribe(e => {
          this.graficoAux = e;
          this.graficoAux.forEach(result => {
            this.pieChartLabels.push("Nível "+result.label+"");
            this.pieChartData.push(result.valor);
          })
        });
    }
  
    // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

}
