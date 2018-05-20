import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FaqModelPage } from './faq-model';

@NgModule({
  declarations: [
    FaqModelPage,
  ],
  imports: [
    IonicPageModule.forChild(FaqModelPage),
  ],
})
export class FaqModelPageModule {}
