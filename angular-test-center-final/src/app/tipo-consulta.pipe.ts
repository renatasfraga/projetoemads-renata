import { Pipe, PipeTransform } from '@angular/core';
import { TipoConsulta } from './grafico-incluir/grafico-incluir.component';

@Pipe({
  name: 'tipoConsulta'
})
export class TipoConsultaPipe implements PipeTransform {

  tiposConsulta:TipoConsulta[] = [
    {value: 'GC', description: 'Criticidade de Defeitos'},
    {value: 'GQ', description: 'Qualidade por Histórias de Usuário'},
    {value: 'GBM', description: 'Quantidade de Defeitos Mensais'},
    {value: 'GPC', description: 'Defeitos Criados'},
    {value: 'GPA', description: 'Defeitos Atribuídos'},
    {value: 'GPS', description: 'Defeito por Status'}
  ];
  
  transform(consulta:string): string {
    for(var i = 0; i < this.tiposConsulta.length; i++) {
      if(this.tiposConsulta[i].value == consulta) {
        return this.tiposConsulta[i].description;
      }
    }
  }

}
