import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteIncluirComponent } from './teste-incluir.component';

describe('TesteIncluirComponent', () => {
  let component: TesteIncluirComponent;
  let fixture: ComponentFixture<TesteIncluirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesteIncluirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesteIncluirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
