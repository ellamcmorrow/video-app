import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { VideosComponent } from "./components/videos/videos.component";
import { VideoItemComponent } from "./video-item/video-item.component";

@NgModule({
  declarations: [AppComponent, VideosComponent, VideoItemComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
