import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriaIncluirComponent } from './historia-incluir.component';

describe('HistoriaIncluirComponent', () => {
  let component: HistoriaIncluirComponent;
  let fixture: ComponentFixture<HistoriaIncluirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoriaIncluirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriaIncluirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
