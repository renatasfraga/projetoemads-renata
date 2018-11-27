import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanoEditarComponent } from './plano-editar.component';

describe('PlanoEditarComponent', () => {
  let component: PlanoEditarComponent;
  let fixture: ComponentFixture<PlanoEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanoEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanoEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
