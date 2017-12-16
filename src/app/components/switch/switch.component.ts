import { SwitchesService } from './../../shared/switches.service';
import { EntitySwitch } from './../../shared/entity-switch';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rf-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent implements OnInit {

 @Input()
 switch: EntitySwitch;

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

  public switchDelete() { }

}
