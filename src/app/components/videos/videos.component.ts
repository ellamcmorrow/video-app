import { Component, OnInit } from "@angular/core";
import { Video } from "../../models/Video";
import { VideoService } from "../../services/video.service";

@Component({
  selector: "app-videos",
  templateUrl: "./videos.component.html",
  styleUrls: ["./videos.component.css"]
})
export class VideosComponent implements OnInit {
  videos: Video[];
  //injecting service into the constructor
  constructor(private videoService: VideoService) {}

  ngOnInit() {
    //when the component lods, load the videos
    //subscribe to the observale in the service
    this.videoService.getVideos().subscribe(videos => {
      this.videos = videos;
    });
  }
}
