import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanoIncluirComponent } from './plano-incluir.component';

describe('PlanoIncluirComponent', () => {
  let component: PlanoIncluirComponent;
  let fixture: ComponentFixture<PlanoIncluirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanoIncluirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanoIncluirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
