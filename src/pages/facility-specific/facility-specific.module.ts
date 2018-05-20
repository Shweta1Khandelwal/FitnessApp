import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FacilitySpecificPage } from './facility-specific';

@NgModule({
  declarations: [
    FacilitySpecificPage,
  ],
  imports: [
    IonicPageModule.forChild(FacilitySpecificPage),
  ],
})
export class FacilitySpecificPageModule {}
