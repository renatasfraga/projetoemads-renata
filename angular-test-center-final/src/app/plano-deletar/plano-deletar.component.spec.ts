import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanoDeletarComponent } from './plano-deletar.component';

describe('PlanoDeletarComponent', () => {
  let component: PlanoDeletarComponent;
  let fixture: ComponentFixture<PlanoDeletarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanoDeletarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanoDeletarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
