import { Component } from '@angular/core'
import { NavController } from 'ionic-angular'

import { GamePage } from '../game/game'
import { LeaguePage } from '../league/league'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(
    public navCtrl: NavController
  ) {}

  doGame() {
    this.navCtrl.push(GamePage)
  }

  doLeague() {
    this.navCtrl.push(LeaguePage)
  }

}
