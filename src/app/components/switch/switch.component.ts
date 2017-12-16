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

  constructor() { }

  ngOnInit() {
  }

  public switchOn() { }

  public switchOff() { }

  public switchDelete() { }

}
