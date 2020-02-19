import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BeaconsRoutingModule } from './beacons-routing.module';
import { BeaconsComponent } from './beacons.component';
import { BeaconComponent } from './beacon/beacon.component';
import { BeaconListComponent } from './beacon-list/beacon-list.component';

@NgModule({
  declarations: [
	BeaconsComponent,
	BeaconListComponent, 
    BeaconComponent 
  ],
  imports: [
    CommonModule,
	BeaconsRoutingModule,
	FormsModule
  ],
  exports: [
    BeaconsComponent
  ]
})
export class BeaconsModule { }
