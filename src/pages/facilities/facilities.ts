import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { FacilityTypePage } from '../facility-type/facility-type';
/**
 * Generated class for the FacilitiesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-facilities',
  templateUrl: 'facilities.html',
})
export class FacilitiesPage {
  @ViewChild(Nav) nav: Nav;
  pages: Array<{ image: string, title: string }>;
  lists: Array<{title:string}>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pages = [
      { title: "Y O G A", image: "assets/imgs/yoga.jpg" },
      { title: "B O D Y B U L I D I N G", image: "assets/imgs/bb.jpg" },
      { title: "P H Y S I Q U E", image: "assets/imgs/physique.jpg" },
      { title: "F I T N E S S", image: "assets/imgs/fitness.jpg" },
      { title: "Z U M B A", image: "assets/imgs/zumba.jpg" }
    ];

    this.lists=[
      { title:"Yoga"},
      { title: "BODYBULIDING"},
      { title: "PHYSIQUE"},
      { title: "FITNESS"},
      { title: "ZUMBA"},

    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FacilitiesPage');
  }
  openPage(list) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.navCtrl.push(FacilityTypePage,{id:list})
  } 
  // listDetail(list){
  //   this.navCtrl.push(FacilityTypePage,{id:list});
  // }
}
