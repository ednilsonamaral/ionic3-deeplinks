import { Component } from '@angular/core'
import { NavController, NavParams } from 'ionic-angular'

@Component({
  selector: 'page-league',
  templateUrl: 'league.html',
})

export class LeaguePage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LeaguePage')
  }

}
