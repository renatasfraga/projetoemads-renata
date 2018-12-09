import { Component, OnInit, Inject } from '@angular/core';
import { ProjetoService } from '../services/projeto.service';
import { UsuarioService } from '../services/usuario.service';
import { GraficoService } from '../services/grafico.service';
import { GraficoAux } from '../classes/grafico-aux';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Grafico } from '../classes/grafico';
import { TipoGrafico, TipoConsulta } from '../grafico-incluir/grafico-incluir.component';


@Component({
  selector: 'app-grafico-gerar',
  templateUrl: './grafico-gerar.component.html',
  styleUrls: ['./grafico-gerar.component.css']
})
export class GraficoGerarComponent implements OnInit {

  graficoForm:FormGroup;
  id:number;  
  grafico:Grafico;
  graficoAux:GraficoAux[];
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
    {value: 'bar' , description: 'Barra Vertical'},
    {value: 'pie', description: 'Pizza'},
    {value: 'doughnut', description: 'Roda'}
  ];

  public chartColors: Array<any> = [{ 
      backgroundColor: ['#00CED1', '#FF69B4','#9370DB','#FFD700','#EE3B3B']
    }];

  //pie
  public pieChartLabels:string[] = [];
  public pieChartData:number[] = [];
  public pieChartType:string = 'pie';
       
  // Doughnut
  public doughnutChartLabels:string[] = [];
  public doughnutChartData:number[] = [];
  public doughnutChartType:string = 'doughnut';
 
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = [];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
 
  public barChartData:any[] = [];
 
  
  constructor(private projetoService:ProjetoService,
              private usuarioService:UsuarioService,
              private graficoService:GraficoService,
              private router : Router,
              private rotaAtiva: ActivatedRoute,
              private formBuilder: FormBuilder) { }



  ngOnInit() {
    this.tipoGraficoTemp = this.tiposGrafico;
    this.usuarioService.getUsuariosByProjeto(this.projetoService.projetoSelecionado.id);
    this.getGrafico(this.rotaAtiva.snapshot.params['id']);
    this.graficoForm = this.formBuilder.group({
      'id':[null, Validators.required],
      'idCopy':[null, Validators.required],
      'titulo': [null, Validators.required],
      'tipoConsulta':  [null, Validators.required],
      'tipoGrafico':  [null, Validators.required],
      'usuarioCriador': [null, Validators.required],
      'usuarioCriadorCopy':[null, Validators.required],
      'usuarioAux':[null],
      'usuarioAuxCopy':[null],
      'projeto':[null, Validators.required]
    });  
    this.graficoForm.get('idCopy').disable();  
    this.graficoForm.get('tipoGrafico').disable();
    if(this.graficoForm.get('usuarioAuxCopy').value == null) {
      this.graficoForm.get('usuarioAuxCopy').disable();
    }
    this.graficoService.getGraficoById(this.rotaAtiva.snapshot.params['id'])
    .subscribe( e => {
      this.grafico = e;
      if(this.grafico.tipoConsulta == 'GC') {
          this.graficoService.gerarGraficoCriticidade(this.projetoService.projetoSelecionado.id)
                             .subscribe(res => {
               this.graficoAux = res;
               if(this.grafico.tipoGrafico == 'pie') {
                  this.graficoAux.forEach(res => {
                    this.pieChartLabels.push("Nível "+res.label);
                    this.pieChartData.push(res.valor);
                  });
               } else {
                this.graficoAux.forEach(res => {
                  this.doughnutChartLabels.push("Nível "+res.label);
                  this.doughnutChartData.push(res.valor);
                });
               }
          }); 
      } else if(this.grafico.tipoConsulta == 'GQ') {
        this.graficoService.gerarGraficoPorQualidade(this.projetoService.projetoSelecionado.id)
            .subscribe(res => {
              this.graficoAux = res;
              if(this.grafico.tipoGrafico == 'pie') {
                this.graficoAux.forEach(res => {
                  this.pieChartLabels.push("Nível "+res.label);
                  this.pieChartData.push(res.valor);
                });
             } else {
              this.graficoAux.forEach(res => {
                this.doughnutChartLabels.push("Nível "+res.label);
                this.doughnutChartData.push(res.valor);
              });
             }
            });
      } else if(this.grafico.tipoConsulta == 'GBM') {
          this.graficoService.gerarGraficoBugsPorMes(this.projetoService.projetoSelecionado.id)
          .subscribe(res => {
              this.graficoAux = res;  
              let data:number[] = [];
              let labels:string[] = [];
              this.graficoAux.forEach(e => {
                data.push(e.valor);
                labels.push(e.label.substring(8,10)+"/"+e.label.substring(5,7)+"/"+e.label.substring(0,4));
              });
              this.barChartData.push({data:data,label:'Bugs'});
              this.barChartLabels = labels;
          });
      } else if(this.grafico.tipoConsulta == 'GPC') {
        this.graficoService.gerarGraficoPorCriador(this.graficoForm.get('usuarioCriadorCopy').value,this.projetoService.projetoSelecionado.id)
            .subscribe(res => {
              this.graficoAux = res;
              if(this.grafico.tipoGrafico == 'pie') {
                this.graficoAux.forEach(res => {
                  this.pieChartLabels.push("Nível "+res.label);
                  this.pieChartData.push(res.valor);
                });
             } else {
              this.graficoAux.forEach(res => {
                this.doughnutChartLabels.push("Nível "+res.label);
                this.doughnutChartData.push(res.valor);
              });
             }
            });
      } else if(this.grafico.tipoConsulta == 'GPA') {
          this.graficoService.gerarGraficoPorAtribuido(this.graficoForm.get('usuarioCriadorCopy').value,this.projetoService.projetoSelecionado.id)
              .subscribe(res => {
                this.graficoAux = res;
                if(this.grafico.tipoGrafico == 'pie') {
                  this.graficoAux.forEach(res => {
                    this.pieChartLabels.push("Nível "+res.label);
                    this.pieChartData.push(res.valor);
                  });
               } else {
                this.graficoAux.forEach(res => {
                  this.doughnutChartLabels.push("Nível "+res.label);
                  this.doughnutChartData.push(res.valor);
                });
               }
          });
      } else {
          this.graficoService.gerarGraficoStatus(this.projetoService.projetoSelecionado.id) 
              .subscribe(res => {
                this.graficoAux = res;
                if(this.grafico.tipoGrafico == 'pie') {
                  this.graficoAux.forEach(res => {
                    this.pieChartLabels.push("Nível "+res.label);
                    this.pieChartData.push(res.valor);
                  });
               } else {
                this.graficoAux.forEach(res => {
                  this.doughnutChartLabels.push("Nível "+res.label);
                  this.doughnutChartData.push(res.valor);
                });
               }
          });
        }
    });
   
  
  }
  
  getGrafico(id) {
    this.graficoService.getGraficoById(id)
        .subscribe(e => {
          this.id = e.id;
          this.graficoForm.setValue({
              id: e.id,
              idCopy: e.id,
              titulo: e.titulo,
              tipoConsulta: e.tipoConsulta,
              tipoGrafico: e.tipoGrafico,       
              usuarioCriador: e.usuarioCriador,
              usuarioCriadorCopy: e.usuarioCriador.email,
              usuarioAux:e.usuarioAux,
              usuarioAuxCopy: e.usuarioAux != null ? e.usuarioAux.email : "",
              projeto: e.projeto
          });
        });
  }


  onFormSubmit(form:NgForm) {
    this.graficoService.updateGrafico(form)
        .subscribe( rest => {
          alert("Grafico alterado com sucesso!");
          this.router.navigate(['/grafico-listar']);
        }, (err) => {
          console.log(err);
        });
   }   


   refinaTipoGrafico() {
    this.tipoGraficoTemp = this.tiposGrafico;
    if(this.graficoForm.get('tipoConsulta').value == 'GBM') {
      this.tipoGraficoTemp = this.tiposGrafico.filter(objeto => objeto.value != 'pie' && objeto.value != 'doughnut');
      this.graficoForm.get('usuarioAuxCopy').setValue(null);
      this.graficoForm.get('usuarioAuxCopy').disable();

    } else {
      this.tipoGraficoTemp = this.tiposGrafico.filter(objeto => objeto.value !== 'bar');
      if(this.graficoForm.get('tipoConsulta').value == 'GPC' || this.graficoForm.get('tipoConsulta').value == 'GPA') {
        this.graficoForm.get('usuarioAuxCopy').enable();
      } else {
        this.graficoForm.get('usuarioAuxCopy').setValue(null);
        this.graficoForm.get('usuarioAuxCopy').disable();
      }
    }
    this.graficoForm.get('tipoGrafico').enable();
  }

  validaUserCriador() {
    this.usuarioService.getUsuarioById(this.graficoForm.get('usuarioCriadorCopy').value)
        .subscribe(e => {
          this.graficoForm.get('usuarioCriador').setValue(e);
    });
  }

  validaUserAuxiliar() {
    this.usuarioService.getUsuarioById(this.graficoForm.get('usuarioAuxCopy').value)
        .subscribe(e => {
          this.graficoForm.get('usuarioAux').setValue(e);
    });
  }
 
}
