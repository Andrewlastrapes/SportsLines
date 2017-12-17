import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NflPage } from "../nfl/nfl";
import { NcaafPage } from "../ncaaf/ncaaf";
import { NbaPage } from "../nba/nba";

/**
 * Generated class for the LinesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lines',
  templateUrl: 'lines.html',
})
export class LinesPage {

  tab1Root = NflPage;
  tab2Root = NcaafPage;
  tab3Root = NbaPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LinesPage');
  }

}
