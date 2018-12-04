import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefeitoIncluirComponent } from './defeito-incluir.component';

describe('DefeitoIncluirComponent', () => {
  let component: DefeitoIncluirComponent;
  let fixture: ComponentFixture<DefeitoIncluirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefeitoIncluirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefeitoIncluirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
