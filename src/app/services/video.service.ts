import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"; // Http Headers for toggle watched function
import { Video } from "../models/Video";
import { Observable } from "rxjs";

// const httpOptions = {
//   headers: new HttpHeaders({
//     "Content-Type": "application/json"
//   })
// };

@Injectable({
  providedIn: "root"
})
export class VideoService {
  constructor(private http: HttpClient) {}
  videosUrl: string = "https://jsonplaceholder.typicode.com/todos";
  videosLimit = "?_limit=5";
  //observable is used for asynchronous requests
  //.subscribe is like .then for promises in js/react
  getVideos(): Observable<Video[]> {
    return this.http.get<Video[]>(`${this.videosUrl}${this.videosLimit}`);
  }
  // // Toggle Completed
  // toggleWatched(video: Video): Observable<any> {
  //   const url = `${this.videosUrl}/${video.id}`;
  //   return this.http.put(url, video, httpOptions);
  // }
}
