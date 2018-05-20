import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import { ModalPage } from '../modal/modal';
/**
 * Generated class for the ImagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-image',
  templateUrl: 'image.html',
})
export class ImagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController) {
  }
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad ImagePage');
  }
  presentModal() {
    let modal = this.modalCtrl.create(ModalPage);
    modal.present();
  }
 
}
