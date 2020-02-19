import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BeaconsComponent} from './beacons.component';

const routes: Routes = [{ path: 'beacons', component: BeaconsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BeaconsRoutingModule { }