import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
//Service 
import { BeaconService } from '../../../services/beacon.service'
//Beacon class
import{ Beacon } from '../../../models/beacon'

@Component({
  selector: 'app-beacon',
  templateUrl: './beacon.component.html',
  styleUrls: ['./beacon.component.scss']
})
export class BeaconComponent implements OnInit {

  constructor(public beaconService: BeaconService) { }

  ngOnInit(): void {
    this.beaconService.getBeacons();
    this.resetForm();
  }
  onSubmit(beaconForm: NgForm){
    if(beaconForm.value.$key == null)
      this.beaconService.insertBeacon(beaconForm.value)
    else
      this.beaconService.updateBeacon(beaconForm.value);
    
      this.resetForm(beaconForm);
  }
  resetForm(beaconForm?: NgForm){
    if(beaconForm!=null)
      beaconForm.reset();
      this.beaconService.selectedBeacon=new Beacon();
  }
}