import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserStoryEditarComponent } from './user-story-editar.component';

describe('UserStoryEditarComponent', () => {
  let component: UserStoryEditarComponent;
  let fixture: ComponentFixture<UserStoryEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserStoryEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserStoryEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
