import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ImagePage } from '../pages/image/image';
import { HomePage } from '../pages/home/home';
import { GalleryPage } from '../pages/gallery/gallery';
import { LoginPage } from '../pages/login/login';
import { FacilitiesPage } from '../pages/facilities/facilities';
import { ContactPage } from '../pages/contact/contact';
import { FaqPage } from '../pages/faq/faq';
import { OffersPage } from '../pages/offers/offers';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{ component: any, icon: string }>;
  pages2: Array<{ component: any, icon: string }>;
  pages3: Array<{ component: any, icon: string }>;
  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { component: HomePage, icon: 'home' },
      { component: GalleryPage, icon: 'aperture' },
      { component: LoginPage, icon: 'log-in' },

    ];
    this.pages2 = [
      { component: FacilitiesPage, icon: 'apps' },
      { component: ContactPage, icon: 'call' },
      { component: OffersPage, icon: 'basket' },

    ];
    this.pages3 = [
      { component: FaqPage, icon: 'help' },
      

    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  openPage2(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
    console.log("entered");
  }
}
