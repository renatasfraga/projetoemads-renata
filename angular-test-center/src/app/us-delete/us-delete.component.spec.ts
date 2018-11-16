import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsDeleteComponent } from './us-delete.component';

describe('UsDeleteComponent', () => {
  let component: UsDeleteComponent;
  let fixture: ComponentFixture<UsDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
