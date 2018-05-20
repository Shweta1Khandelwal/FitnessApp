import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VideoModelPage } from './video-model';

@NgModule({
  declarations: [
    VideoModelPage,
  ],
  imports: [
    IonicPageModule.forChild(VideoModelPage),
  ],
})
export class VideoModelPageModule {}
