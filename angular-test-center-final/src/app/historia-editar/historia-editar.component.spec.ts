import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriaEditarComponent } from './historia-editar.component';

describe('HistoriaEditarComponent', () => {
  let component: HistoriaEditarComponent;
  let fixture: ComponentFixture<HistoriaEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoriaEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriaEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
