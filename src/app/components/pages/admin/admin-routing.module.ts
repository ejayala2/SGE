import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';

const routes: Routes = [
  { path: '', component: AdminComponent, 
  children:[
    {
      path:'beacons',
      loadChildren: ()=>
      import ('../../beacons/beacons.component').then(
        m => m.BeaconsComponent
      )
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
