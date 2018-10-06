import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsEditComponent } from './us-edit.component';

describe('UsEditComponent', () => {
  let component: UsEditComponent;
  let fixture: ComponentFixture<UsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
