import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositorioEditarComponent } from './repositorio-editar.component';

describe('RepositorioEditarComponent', () => {
  let component: RepositorioEditarComponent;
  let fixture: ComponentFixture<RepositorioEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepositorioEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepositorioEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
