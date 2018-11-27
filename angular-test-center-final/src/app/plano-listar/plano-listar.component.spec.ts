import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanoListarComponent } from './plano-listar.component';

describe('PlanoListarComponent', () => {
  let component: PlanoListarComponent;
  let fixture: ComponentFixture<PlanoListarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanoListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanoListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
