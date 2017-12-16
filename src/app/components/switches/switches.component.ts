import { EntitySwitch } from './../../shared/entity-switch';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rf-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.scss']
})
export class SwitchesComponent implements OnInit {

  public switches: EntitySwitch[];

  constructor() {
    this.switches = [
      new EntitySwitch('lampe', 'http://switch/esocket?no=0&sw=1', 'http://switch/esocket?no=0&sw=0', 'http://switch/edelete?no=0&sw=0'),
      new EntitySwitch('esszimmer', 'http://switch/esocket?no=1&sw=1', 'http://switch/esocket?no=1&sw=0', 'http://switch/edelete?no=1&sw=0')
    ];
   }

  ngOnInit() {
  }

}
