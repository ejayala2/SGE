import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//FIREBASE
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
//SERVICES
import { BeaconService } from './services/beacon.service';

//ANGULARFORMS
import { FormsModule } from '@angular/forms';

//COMPONENTS
import { BeaconsComponent } from './components/beacons/beacons.component';
import { BeaconListComponent } from './components/beacons/beacon-list/beacon-list.component';
import { BeaconComponent } from './components/beacons/beacon/beacon.component'

@NgModule({
  declarations: [
    AppComponent, 
    BeaconsComponent, BeaconListComponent, BeaconComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    BeaconService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }