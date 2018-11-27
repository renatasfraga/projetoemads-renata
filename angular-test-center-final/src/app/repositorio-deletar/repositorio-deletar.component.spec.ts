import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositorioDeletarComponent } from './repositorio-deletar.component';

describe('RepositorioDeletarComponent', () => {
  let component: RepositorioDeletarComponent;
  let fixture: ComponentFixture<RepositorioDeletarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepositorioDeletarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepositorioDeletarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
