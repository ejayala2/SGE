import { Component, OnInit } from '@angular/core';
//SERVICE
import { BeaconService } from '../../../services/beacon.service';
//Class
import { Beacon } from '../../../models/beacon';
import { element } from 'protractor';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-beacon-list',
  templateUrl: './beacon-list.component.html',
  styleUrls: ['./beacon-list.component.scss']
})
export class BeaconListComponent implements OnInit {
  beaconList: Beacon[];

  constructor(
    private beaconService: BeaconService
  ) { }

  ngOnInit(): void {
    this.beaconService.getBeacons()
      .snapshotChanges()
      .subscribe(item => {
        this.beaconList = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["$key"] = element.key;
          this.beaconList.push(x as Beacon);
        });
      });
  }
  //Edita Beacons registrados
  onEdit(beacon: Beacon){
    this.beaconService.selectedBeacon = Object.assign({},beacon);
  }
  //Elimina Beacons
  onDelete($key: string){
    this.beaconService.deleteBeacon($key);
  }
}
