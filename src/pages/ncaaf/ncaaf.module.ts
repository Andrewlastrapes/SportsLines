import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NcaafPage } from './ncaaf';

@NgModule({
  declarations: [
    NcaafPage,
  ],
  imports: [
    IonicPageModule.forChild(NcaafPage),
  ],
})
export class NcaafPageModule {}
