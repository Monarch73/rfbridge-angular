import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SwitchesService } from './shared/switches.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SwitchesComponent } from './components/switches/switches.component';
import { SwitchComponent } from './components/switch/switch.component';
import { NewSwitchComponent } from './components/new-switch/new-switch.component';


@NgModule({
  declarations: [
    AppComponent,
    SwitchesComponent,
    SwitchComponent,
    NewSwitchComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    SwitchesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
