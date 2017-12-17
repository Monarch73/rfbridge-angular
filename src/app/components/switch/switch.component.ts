import { SwitchesService } from './../../shared/switches.service';
import { EntitySwitch } from './../../shared/entity-switch';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'rf-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent implements OnInit {

@Input()
switch: EntitySwitch;

@Output()
switchDeleted = new EventEmitter<number>();

  constructor(public service: SwitchesService) { }

  ngOnInit() {
    console.log('Erstelle ', this.switch.name);
  }

  public switchOn() {
    console.log('Klatsch an');
    this.service.sendUrl(this.switch.urlOn);
   }

  public switchOff() {
    this.service.sendUrl(this.switch.urlOff);
  }

  public switchDelete() {
    this.service.sendUrl(this.switch.urlDelete);
    this.switchDeleted.emit(this.switch.nummer);
   }

}
