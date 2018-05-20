import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FacilitiesPage } from '../facilities/facilities';

/**
 * Generated class for the TranieePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-traniee',
  templateUrl: 'traniee.html',
})
export class TranieePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TranieePage');
  }
  BackPage(){
    this.navCtrl.push(FacilitiesPage);
  }

}
