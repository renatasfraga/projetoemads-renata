import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioIncluirComponent } from './usuario-incluir.component';

describe('UsuarioIncluirComponent', () => {
  let component: UsuarioIncluirComponent;
  let fixture: ComponentFixture<UsuarioIncluirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioIncluirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioIncluirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
