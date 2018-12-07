import { Pipe, PipeTransform } from '@angular/core';
import { Status } from './defeito-incluir/defeito-incluir.component';

@Pipe({
  name: 'statusPipe'
})
export class StatusPipePipe implements PipeTransform {

  listaStatus: Status[] = [
    {value: 'A', description: 'Aprovado'},
    {value: 'C', description: 'Correção'},
    {value: 'T', description: 'Teste'}
  ];
  

  transform(status: string): string {
      for(var i=0; i < this.listaStatus.length;i++) {
        if(status == this.listaStatus[i].value) {
          return this.listaStatus[i].description;
        }
      }

  }

}
