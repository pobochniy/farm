import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WorkmapModule } from '../workmap/workmap.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
    , AppRoutingModule
    , WorkmapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
