import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LembretesListarComponent } from './lembretes-listar.component';

describe('LembretesListarComponent', () => {
  let component: LembretesListarComponent;
  let fixture: ComponentFixture<LembretesListarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LembretesListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LembretesListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
