import { Component, OnInit } from "@angular/core";
import { Video } from "../../models/Video";

@Component({
  selector: "app-videos",
  templateUrl: "./videos.component.html",
  styleUrls: ["./videos.component.css"]
})
export class VideosComponent implements OnInit {
  videos: Video[];

  constructor() {}

  ngOnInit() {
    this.videos = [
      {
        id: 1,
        title: "Video 1",
        watched: true
      },
      {
        id: 2,
        title: "Video 2",
        watched: false
      },
      {
        id: 3,
        title: "Video 3",
        watched: true
      }
    ];
  }
}
