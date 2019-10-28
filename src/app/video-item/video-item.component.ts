import { Component, OnInit, Input } from "@angular/core";
import { Video } from "src/app/models/Video";

@Component({
  selector: "app-video-item",
  templateUrl: "./video-item.component.html",
  styleUrls: ["./video-item.component.css"]
})
export class VideoItemComponent implements OnInit {
  @Input() video: Video;
  constructor() {}

  ngOnInit() {}
  //set dynamic classes
  setClasses() {
    let classes = {
      video: true,
      "is-watched": this.video.watched
    };
    return classes;
  }
}
