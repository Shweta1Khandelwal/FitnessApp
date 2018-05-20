import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FacilityTypePage } from './facility-type';

@NgModule({
  declarations: [
    FacilityTypePage,
  ],
  imports: [
    IonicPageModule.forChild(FacilityTypePage),
  ],
})
export class FacilityTypePageModule {}
