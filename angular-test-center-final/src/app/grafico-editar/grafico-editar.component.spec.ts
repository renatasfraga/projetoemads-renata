import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoEditarComponent } from './grafico-editar.component';

describe('GraficoEditarComponent', () => {
  let component: GraficoEditarComponent;
  let fixture: ComponentFixture<GraficoEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficoEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
