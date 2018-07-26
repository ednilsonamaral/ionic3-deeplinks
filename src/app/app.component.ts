import { Component, ViewChild } from '@angular/core'
import { Nav, Platform } from 'ionic-angular'
import { StatusBar } from '@ionic-native/status-bar'
import { SplashScreen } from '@ionic-native/splash-screen'
import { Deeplinks } from '@ionic-native/deeplinks'

import { HomePage } from '../pages/home/home'
import { GamePage } from '../pages/game/game'
import { LeaguePage } from '../pages/league/league'

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) navChild: Nav
  rootPage:any = HomePage

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    deepLinks: Deeplinks
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault()
      splashScreen.hide()

      // Deeplink
      deepLinks.routeWithNavController(this.navChild, {
        '/game': GamePage,
        '/league': LeaguePage
      }).subscribe((match) => {
        console.log('native route..', match)
      }, (nomatch) => {})
    })
  }
}
