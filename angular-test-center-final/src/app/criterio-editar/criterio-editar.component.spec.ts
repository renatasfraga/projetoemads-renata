import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriterioEditarComponent } from './criterio-editar.component';

describe('CriterioEditarComponent', () => {
  let component: CriterioEditarComponent;
  let fixture: ComponentFixture<CriterioEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriterioEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriterioEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
