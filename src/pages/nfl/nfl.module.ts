import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NflPage } from './nfl';

@NgModule({
  declarations: [
    NflPage,
  ],
  imports: [
    IonicPageModule.forChild(NflPage),
  ],
})
export class NflPageModule {}
