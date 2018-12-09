import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { ProjetoService } from '../services/projeto.service';
import { UsuarioService } from '../services/usuario.service';
import { GraficoService } from '../services/grafico.service';
import { Grafico } from '../classes/grafico';

export interface TipoConsulta {
  value:string;
  description:string;
}

export interface TipoGrafico {
  value:string;
  description:string;
}

@Component({
  selector: 'app-grafico-incluir',
  templateUrl: './grafico-incluir.component.html',
  styleUrls: ['./grafico-incluir.component.css']
})
export class GraficoIncluirComponent implements OnInit {

  graficoForm:FormGroup;
  graficoRequireInput = false;
  tipoGraficoTemp:TipoGrafico[];

  tiposConsulta:TipoConsulta[] = [
    {value: 'GC', description: 'Criticidade de Defeitos'},
    {value: 'GQ', description: 'Qualidade por Histórias de Usuário'},
    {value: 'GBM', description: 'Quantidade de Defeitos Mensais'},
    {value: 'GPC', description: 'Defeitos Criados'},
    {value: 'GPA', description: 'Defeitos Atribuídos'},
    {value: 'GPS', description: 'Defeito por Status'}
  ];

  tiposGrafico:TipoGrafico[] = [
    {value: 'bar' , description: 'Linha Vertical'},
    {value: 'pie', description: 'Pizza'},
    {value: 'doughnut', description: 'Roda'}
  ];

  constructor(private projetoService:ProjetoService,
              private usuarioService:UsuarioService,
              private graficoService:GraficoService,
              private formBuider: FormBuilder) { }

  ngOnInit() {

    this.graficoForm = this.formBuider.group({
      'titulo': [null, Validators.required],
      'tipoConsulta':  [null, Validators.required],
      'tipoGrafico':  [null, Validators.required],
      'usuarioAux': [null],
      'usuarioCriador': [null, Validators.required],
      'projeto': [this.projetoService.projetoSelecionado, Validators.required],
    });
    this.graficoForm.get('tipoGrafico').disable();
    this.graficoForm.get('usuarioAux').disable();

  }

  onFormSubmit(form:NgForm) {
    this.graficoService.saveGrafico(form).subscribe(res => {
      alert("Gráfico incluído com sucesso!");
      
    });
  }

  refinaTipoGrafico() {
    this.tipoGraficoTemp = this.tiposGrafico;
    if(this.graficoForm.get('tipoConsulta').value == 'GBM') {
      this.tipoGraficoTemp = this.tiposGrafico.filter(objeto => objeto.value != 'pie' && objeto.value != 'doughnut');
      this.graficoForm.get('usuarioAux').setValue(null);
      this.graficoForm.get('usuarioAux').disable();

    } else {
      this.tipoGraficoTemp = this.tiposGrafico.filter(objeto => objeto.value !== 'bar');
      if(this.graficoForm.get('tipoConsulta').value == 'GPC' || this.graficoForm.get('tipoConsulta').value == 'GPA') {
        this.graficoForm.get('usuarioAux').enable();
      } else {
        this.graficoForm.get('usuarioAux').setValue(null);
        this.graficoForm.get('usuarioAux').disable();
      }
    }
    this.graficoForm.get('tipoGrafico').enable();
  }
}


