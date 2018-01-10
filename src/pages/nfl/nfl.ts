import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from "../../providers/rest/rest";

/**
 * Generated class for the NflPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nfl',
  templateUrl: 'nfl.html',
})
export class NflPage {

  homeTeams = [];
  awayTeams = [];
  pointSpreadHome = [];
  pointSpreadAway = [];
  homeLine = [];
  awayLine = [];
  overUnder = [];

	lines : any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public rest: RestProvider) {
  }


  display() {
  	this.rest.getNFL().then(data => {
        this.lines = data;
        console.log(this.lines[0]);
      for (var i = 0; i < this.lines.length; i++){
         this.homeTeams.push(this.lines[i].HomeTeam);
         this.awayTeams.push(this.lines[i].AwayTeam);
         this.pointSpreadHome.push(this.lines[i].Odds[1].PointSpreadHome);
         this.pointSpreadAway.push(this.lines[i].Odds[1].PointSpreadAway);
         this.homeLine.push(this.lines[i].Odds[1].PointSpreadHomeLine);
         this.awayLine.push(this.lines[i].Odds[1].PointSpreadAwayLine);
          this.overUnder.push(this.lines[i].Odds[1].TotalNumber);
        }
    });

      console.log(this.overUnder)
  }

  ngOnInit(){
    this.display();
  }


}
