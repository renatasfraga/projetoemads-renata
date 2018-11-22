import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserStoryListarComponent } from './user-story-listar.component';

describe('UserStoryListarComponent', () => {
  let component: UserStoryListarComponent;
  let fixture: ComponentFixture<UserStoryListarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserStoryListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserStoryListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
