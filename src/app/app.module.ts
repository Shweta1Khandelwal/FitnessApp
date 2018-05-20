import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { GalleryPage } from '../pages/gallery/gallery';
import { ImagePage } from '../pages/image/image';
import { ModalPage } from '../pages/modal/modal';
import { VideoPage } from '../pages/video/video';
import { VideoModelPage } from '../pages/video-model/video-model';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { FacilitiesPage } from '../pages/facilities/facilities';
import { FacilityTypePage } from '../pages/facility-type/facility-type';
import { WorkoutPage } from '../pages/workout/workout';
import { TranieePage } from '../pages/traniee/traniee';
import { FacilitySpecificPage } from '../pages/facility-specific/facility-specific';
import { ContactPage } from '../pages/contact/contact';
import { FaqModelPage } from '../pages/faq-model/faq-model';
import { FaqPage } from '../pages/faq/faq';
import { OffersPage } from '../pages/offers/offers';
import { OfferModelPage } from '../pages/offer-model/offer-model';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    GalleryPage,
    ImagePage,
    VideoPage,
    ModalPage,
    VideoModelPage,
    LoginPage,
    FacilityTypePage,
    FacilitiesPage,
    WorkoutPage,
    TranieePage,
    FacilitySpecificPage,
    ContactPage,
    FaqPage,
    OffersPage,
    FaqModelPage,
    OfferModelPage
  ],
  schemas: [NO_ERRORS_SCHEMA],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    
   
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    GalleryPage,
    ImagePage,
    VideoPage,
    ModalPage,
    VideoModelPage,
    LoginPage,
    FacilitiesPage,
    FacilityTypePage,
    WorkoutPage,
    TranieePage,
    FacilitySpecificPage,
    ContactPage,
    FaqPage,
    OffersPage,
    FaqModelPage,
    OfferModelPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
