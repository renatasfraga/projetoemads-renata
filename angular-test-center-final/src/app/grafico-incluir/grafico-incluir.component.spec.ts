import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoIncluirComponent } from './grafico-incluir.component';

describe('GraficoIncluirComponent', () => {
  let component: GraficoIncluirComponent;
  let fixture: ComponentFixture<GraficoIncluirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficoIncluirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoIncluirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
