

import { Routes, RouterModule } from "@angular/router";

import { PlacedisplayComponent } from './placedisplay/placedisplay.component';



const arr: Routes = [

  { path: "", component: PlacedisplayComponent },

];

export const routing = RouterModule.forRoot(arr);
