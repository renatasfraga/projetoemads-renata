import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoListarComponent } from './grafico-listar.component';

describe('GraficoListarComponent', () => {
  let component: GraficoListarComponent;
  let fixture: ComponentFixture<GraficoListarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficoListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
