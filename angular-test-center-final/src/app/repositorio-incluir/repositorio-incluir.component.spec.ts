import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositorioIncluirComponent } from './repositorio-incluir.component';

describe('RepositorioIncluirComponent', () => {
  let component: RepositorioIncluirComponent;
  let fixture: ComponentFixture<RepositorioIncluirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepositorioIncluirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepositorioIncluirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
