import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriaDeletarComponent } from './historia-deletar.component';

describe('HistoriaDeletarComponent', () => {
  let component: HistoriaDeletarComponent;
  let fixture: ComponentFixture<HistoriaDeletarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoriaDeletarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriaDeletarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
