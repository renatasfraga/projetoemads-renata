import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefeitoListarComponent } from './defeito-listar.component';

describe('DefeitoListarComponent', () => {
  let component: DefeitoListarComponent;
  let fixture: ComponentFixture<DefeitoListarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefeitoListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefeitoListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
