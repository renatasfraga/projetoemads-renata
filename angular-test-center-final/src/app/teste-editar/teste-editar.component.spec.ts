import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteEditarComponent } from './teste-editar.component';

describe('TesteEditarComponent', () => {
  let component: TesteEditarComponent;
  let fixture: ComponentFixture<TesteEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesteEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesteEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
