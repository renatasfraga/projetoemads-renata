import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteListarComponent } from './teste-listar.component';

describe('TesteListarComponent', () => {
  let component: TesteListarComponent;
  let fixture: ComponentFixture<TesteListarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesteListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesteListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
