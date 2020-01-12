import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy, NavParams } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import {HttpClientModule} from '@angular/common/http'
import { TapticEngine } from '@ionic-native/taptic-engine/ngx';

import {ListDetailPagePage} from "src/app/list-detail-page/list-detail-page.page"
import { FormsModule } from '@angular/forms';
import { HTTP } from '@ionic-native/http/ngx';

import { VirtualScrollerModule } from 'ngx-virtual-scroller';

import {FilterPopoverComponent} from"../app/filter-popover/filter-popover.component"
import {TitlePopoverComponent} from "../app/title-popover/title-popover.component"
import { IonicStorageModule } from '@ionic/storage';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';



@NgModule({
  declarations: [AppComponent,ListDetailPagePage,FilterPopoverComponent,TitlePopoverComponent],
  entryComponents: [
    ListDetailPagePage,
    FilterPopoverComponent,
    TitlePopoverComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    VirtualScrollerModule,
    IonicStorageModule.forRoot()
  ],
  providers: [
    StatusBar,
    SplashScreen,
    TapticEngine,
    HTTP,
    InAppBrowser,
    IonicStorageModule,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}