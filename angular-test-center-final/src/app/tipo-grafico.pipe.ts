import { Pipe, PipeTransform } from '@angular/core';
import { TipoGrafico } from './grafico-incluir/grafico-incluir.component';

@Pipe({
  name: 'tipoGrafico'
})
export class TipoGraficoPipe implements PipeTransform {

  tiposGrafico:TipoGrafico[] = [
    {value: 'bar' , description: 'Barra Vertical'},
    {value: 'pie', description: 'Pizza'},
    {value: 'doughnut', description: 'Roda'}
  ];

  transform(grafico:string): string {
    for(var i = 0; i< this.tiposGrafico.length; i++){
      if(this.tiposGrafico[i].value == grafico) {
        return this.tiposGrafico[i].description;
      }
    }
  }

}
