import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { WorkmapComponent } from './workmap.component';

const routes: Routes = [{
  path: 'workmap', children: [
    { path: '', component: WorkmapComponent },
    { path: 'first', component: FirstComponent },
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)]
})
export class WorkmapRoutingModule { }
