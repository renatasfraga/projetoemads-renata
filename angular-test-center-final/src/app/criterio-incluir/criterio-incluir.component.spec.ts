import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriterioIncluirComponent } from './criterio-incluir.component';

describe('CriterioIncluirComponent', () => {
  let component: CriterioIncluirComponent;
  let fixture: ComponentFixture<CriterioIncluirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriterioIncluirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriterioIncluirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
