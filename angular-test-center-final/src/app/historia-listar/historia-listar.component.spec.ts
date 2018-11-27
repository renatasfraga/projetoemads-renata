import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriaListarComponent } from './historia-listar.component';

describe('HistoriaListarComponent', () => {
  let component: HistoriaListarComponent;
  let fixture: ComponentFixture<HistoriaListarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoriaListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriaListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
