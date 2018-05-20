import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController} from 'ionic-angular';
import { OfferModelPage } from '../offer-model/offer-model';

/**
 * Generated class for the OffersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-offers',
  templateUrl: 'offers.html',
})
export class OffersPage {
  pages: Array<{ image: string, title: string }>;
  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController) {
    this.pages = [
      { image: "assets/imgs/offer1.jpg",title:"Get 3 months Free"},
      { image:"assets/imgs/offer2.jpg",title:"Student Discount" },
       
     

    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OffersPage');
  }
  presentModal() {
    let modal = this.modalCtrl.create(OfferModelPage);
    modal.present();
  }
}
