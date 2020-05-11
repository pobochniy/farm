import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FirstComponent } from './first/first.component';
import { WorkmapRoutingModule } from './workmap-routing.module';
import { WorkmapComponent } from './workmap.component';
import { RouterModule } from '@angular/router';
import { StrafeCameraDirective } from './directives/strafe-camera.directive';

@NgModule({
  declarations: [
    WorkmapComponent
    , FirstComponent, StrafeCameraDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    WorkmapRoutingModule
  ]
})
export class WorkmapModule { }
