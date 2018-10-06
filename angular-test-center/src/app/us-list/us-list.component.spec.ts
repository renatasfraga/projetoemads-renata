import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsListComponent } from './us-list.component';

describe('UsListComponent', () => {
  let component: UsListComponent;
  let fixture: ComponentFixture<UsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
