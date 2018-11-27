import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositorioListarComponent } from './repositorio-listar.component';

describe('RepositorioListarComponent', () => {
  let component: RepositorioListarComponent;
  let fixture: ComponentFixture<RepositorioListarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepositorioListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepositorioListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
