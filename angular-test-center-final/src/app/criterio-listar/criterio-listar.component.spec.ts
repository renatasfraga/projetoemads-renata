import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriterioListarComponent } from './criterio-listar.component';

describe('CriterioListarComponent', () => {
  let component: CriterioListarComponent;
  let fixture: ComponentFixture<CriterioListarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriterioListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriterioListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
