import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoGerarComponent } from './grafico-gerar.component';

describe('GraficoGerarComponent', () => {
  let component: GraficoGerarComponent;
  let fixture: ComponentFixture<GraficoGerarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficoGerarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoGerarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
