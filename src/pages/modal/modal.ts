import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  // dismiss() {
  //   this.navCtrl.pop()
  // }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }
  closeModal() {
    this.navCtrl.pop();
}
}
