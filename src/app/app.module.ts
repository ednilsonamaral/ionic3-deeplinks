import { BrowserModule } from '@angular/platform-browser'
import { ErrorHandler, NgModule } from '@angular/core'
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular'
import { SplashScreen } from '@ionic-native/splash-screen'
import { StatusBar } from '@ionic-native/status-bar'
import { Deeplinks } from '@ionic-native/deeplinks'

import { MyApp } from './app.component'

import { HomePage } from '../pages/home/home'
import { GamePage } from '../pages/game/game'
import { LeaguePage } from '../pages/league/league'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    GamePage,
    LeaguePage
  ],

  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,
      {
        localStrategy: 'path' // utilizar o padrao /#/
      },
      // Deeplinker
      {
        links: [
          { component: GamePage, name: 'Game', segment: 'game'},
          { component: LeaguePage, name: 'League', segment: 'league'}
        ]
      }
    )
  ],

  bootstrap: [IonicApp],

  entryComponents: [
    MyApp,
    HomePage,
    GamePage,
    LeaguePage
  ],

  providers: [
    StatusBar,
    SplashScreen,
    Deeplinks,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})

export class AppModule {}
