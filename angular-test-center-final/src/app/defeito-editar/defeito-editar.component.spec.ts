import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefeitoEditarComponent } from './defeito-editar.component';

describe('DefeitoEditarComponent', () => {
  let component: DefeitoEditarComponent;
  let fixture: ComponentFixture<DefeitoEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefeitoEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefeitoEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
