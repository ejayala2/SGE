import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Beacon } from '../models/beacon';

@Injectable({
  providedIn: 'root'
})
export class BeaconService {
  beaconlist: AngularFireList<any>;
  selectedBeacon: Beacon = new Beacon();

  constructor(public firebase: AngularFireDatabase) { }

  getBeacons(){
    return this.beaconlist = this.firebase.list('beacons');
  }

  insertBeacon(beacon: Beacon){
    this.beaconlist.push({
      name: beacon.name,
      uuid: beacon.uuid
    })
  }

  updateBeacon(beacon: Beacon){
    this.beaconlist.update(beacon.$key, {
      name: beacon.name,
      uuid: beacon.uuid
    })
  }

  deleteBeacon($key: string){
    this.beaconlist.remove($key);
  }
}
