import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetoSelecionarComponent } from './projeto-selecionar.component';

describe('ProjetoSelecionarComponent', () => {
  let component: ProjetoSelecionarComponent;
  let fixture: ComponentFixture<ProjetoSelecionarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetoSelecionarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetoSelecionarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
