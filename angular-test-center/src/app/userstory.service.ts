import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserStory } from './user-story';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserstoryService {

  private usUrl = 'http://localhost:8081/userstory';

  constructor(private http:HttpClient) { }

  public getUserStories() {
    return this.http.get<UserStory[]>(this.usUrl);
  }

  public deleteUserStory(userStory) {
    return this.http.delete(this.usUrl + "/"+ userStory.id);
  }

  public createUserStory(userStory) {
    return this.http.post<UserStory>(this.usUrl, userStory);
  }

  public updateUserStory(userStory) {
    return this.http.put<UserStory>(this.usUrl, userStory);
  }

  public getUserStoryById(id) {
    return this.http.get<UserStory>(this.usUrl+id);
  }
}
