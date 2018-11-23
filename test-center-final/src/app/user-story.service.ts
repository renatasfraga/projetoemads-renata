import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserStory } from './user-story';

@Injectable({
  providedIn: 'root'
})
export class UserStoryService {

  USER_STORY_URL = 'http://localhost:8081/userstory';

  constructor(private http: HttpClient) { }

  addUserStory(userStory : UserStory) {
    return this.http.post<UserStory>(this.USER_STORY_URL, userStory);
  }

}
