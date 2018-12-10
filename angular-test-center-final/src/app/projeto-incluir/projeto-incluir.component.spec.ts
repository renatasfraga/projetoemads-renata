import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetoIncluirComponent } from './projeto-incluir.component';

describe('ProjetoIncluirComponent', () => {
  let component: ProjetoIncluirComponent;
  let fixture: ComponentFixture<ProjetoIncluirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetoIncluirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetoIncluirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
