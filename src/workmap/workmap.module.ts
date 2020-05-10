import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FirstComponent } from './first/first.component';
import { WorkmapRoutingModule } from './workmap-routing.module';
import { WorkmapComponent } from './workmap.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    WorkmapComponent
    , FirstComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    WorkmapRoutingModule
  ]
})
export class WorkmapModule { }
