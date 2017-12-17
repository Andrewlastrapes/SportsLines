import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LinesPage } from "../lines/lines";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  toLinesPage() {
  	this.navCtrl.push(LinesPage)
  }

}
