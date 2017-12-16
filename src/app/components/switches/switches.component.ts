import { element } from 'protractor';
import { SwitchesService } from './../../shared/switches.service';
import { EntitySwitch } from './../../shared/entity-switch';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rf-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.scss']
})
export class SwitchesComponent implements OnInit {

  public switches: EntitySwitch[];

  constructor(private service: SwitchesService) {
    this.switches = [
      new EntitySwitch(
        0,
        'lampe',
        'http://switch/esocket?no=0&sw=1',
        'http://switch/esocket?no=0&sw=0',
        'http://switch/edelete?no=0&sw=0'),
      new EntitySwitch(
        1,
        'esszimmer',
        'http://switch/esocket?no=1&sw=1',
        'http://switch/esocket?no=1&sw=0',
        'http://switch/edelete?no=1&sw=0')
    ];
//
//    this.service.getSwitches('').
//    subscribe( switches2 => {
//      this.switches = [];
//      switches2.forEach(ele => {
//        this.switches.push(
//          new EntitySwitch(
//            ele.i,
//            ele.n,
//            'http://switch/esocket?no=' + ele.i + '&sw=1',
//            'http://switch/esocket?no=' + ele.i + '&sw=0',
//            'http://switch/edelete?no=' + ele.i + '&sw=0'
//          ));
//      });
//    } );
   }

  ngOnInit() {
  }

}
