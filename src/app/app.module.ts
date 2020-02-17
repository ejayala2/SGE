import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//FIREBASE
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';

//SERVICES
import { BeaconService } from './services/beacon.service';
import { AuthService } from './services/auth.service';
//ANGULARFORMS
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

//COMPONENTS
import { BeaconsComponent } from './components/beacons/beacons.component';
import { BeaconListComponent } from './components/beacons/beacon-list/beacon-list.component';
import { BeaconComponent } from './components/beacons/beacon/beacon.component';
import { EventsComponent } from './components/events/events.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent, 
    BeaconsComponent, BeaconListComponent, BeaconComponent, EventsComponent, ToolbarComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    BeaconService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
