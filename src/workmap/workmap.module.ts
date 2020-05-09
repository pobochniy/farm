import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FirstComponent } from './first/first.component';
import { WorkmapRoutingModule } from './workmap-routing.module';
import { WorkmapComponent } from './workmap.component';

@NgModule({
  declarations: [
    WorkmapComponent
    , FirstComponent
  ],
  imports: [
    CommonModule,
    WorkmapRoutingModule
  ]
})
export class WorkmapModule { }
