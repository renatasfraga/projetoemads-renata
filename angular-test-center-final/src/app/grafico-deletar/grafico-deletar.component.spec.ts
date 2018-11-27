import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoDeletarComponent } from './grafico-deletar.component';

describe('GraficoDeletarComponent', () => {
  let component: GraficoDeletarComponent;
  let fixture: ComponentFixture<GraficoDeletarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficoDeletarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoDeletarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
