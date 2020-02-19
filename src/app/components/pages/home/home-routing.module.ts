import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

const routes: Routes = [
  { 
    path: '', component: HomeComponent,
    children:[
      {
        path:'/beacons',
        loadChildren: ()=>
        import ('../../beacons/beacons.module').then(
          m => m.BeaconsModule
        )
      }
    ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
