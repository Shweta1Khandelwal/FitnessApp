import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FaqModelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-faq-model',
  templateUrl: 'faq-model.html',
})
export class FaqModelPage {
  title: any;
  Question1:any;
  Question2:any;
  Answer1:any;
  Answer2:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.title = this.navParams.get("title");
    this.Question1 = this.navParams.get("Question1");
    this.Question2 = this.navParams.get("Question2");
    this.Answer1 = this.navParams.get("Answer1");
    this.Answer2 = this.navParams.get("Answer2");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FaqModelPage');
  }
  closeModal() {
    this.navCtrl.pop();
}

}
