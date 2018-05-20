import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ImagePage } from '../image/image';
import { WorkoutPage } from '../workout/workout';
import { TranieePage } from '../traniee/traniee';
import { FacilitySpecificPage } from '../facility-specific/facility-specific';
import { FacilitiesPage } from '../facilities/facilities';

/**
 * Generated class for the FacilityTypePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-facility-type',
  templateUrl: 'facility-type.html',
})
export class FacilityTypePage {
  tab1Root: any =FacilitySpecificPage;
  tab2Root: any = WorkoutPage;
  tab3Root: any = TranieePage;
  mySelectedIndex: number;
  userProfile: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;
    this.userProfile = this.navParams.get("id");
    console.log(this.navParams.get("id"));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FacilityTypePage');
  }

  BackPage(){
    this.navCtrl.push(FacilitiesPage);
  }

}
