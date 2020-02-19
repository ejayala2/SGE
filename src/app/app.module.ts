import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
/*
import { BeaconsComponent } from './components/beacons/beacons.component';
import { BeaconListComponent } from './components/beacons/beacon-list/beacon-list.component';
import { BeaconComponent } from './components/beacons/beacon/beacon.component';*/
import { EventsComponent } from './components/events/events.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { from } from 'rxjs';
import { ContainerAppComponent } from './components/pages/container-app/container-app.component';

//SideBar
import { SidebarComponent } from './components/sidebar/sidebar.component';
//Scrollbar
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { BsDropdownModule } from 'ngx-bootstrap';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [
    AppComponent, 
    EventsComponent,
    SidebarComponent, 
    ToolbarComponent, ContainerAppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    PerfectScrollbarModule
  ],
  providers: [
    BeaconService,
    AuthService,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
