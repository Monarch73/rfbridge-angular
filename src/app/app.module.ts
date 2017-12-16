import { HttpClientModule } from '@angular/common/http';
import { SwitchesService } from './shared/switches.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SwitchesComponent } from './components/switches/switches.component';
import { SwitchComponent } from './components/switch/switch.component';


@NgModule({
  declarations: [
    AppComponent,
    SwitchesComponent,
    SwitchComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    SwitchesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
