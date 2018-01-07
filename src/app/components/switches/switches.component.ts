import { ActivatedRoute } from '@angular/router';
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
  public espHost: string;

  constructor(
    private service: SwitchesService,
    public route: ActivatedRoute) {
//    this.switches = [
//      new EntitySwitch(
//        0,
//        'lampe',
//        'http://switch/esocket?no=0&sw=1',
//        'http://switch/esocket?no=0&sw=0',
//        'http://switch/edelete?no=0&sw=0'),
//      new EntitySwitch(
//        1,
//        'esszimmer',
//        'http://switch/esocket?no=1&sw=1',
//        'http://switch/esocket?no=1&sw=0',
//        'http://switch/edelete?no=1&sw=0')
//    ];
////
    // need to delay
    setTimeout(() => {
      this.reloadSwitches();
    }, 1000);
   }

  ngOnInit() {
    this.espHost = '';
    console.log('fragment', this.route.snapshot.fragment);
    if (this.route.snapshot.fragment != null && this.route.snapshot.fragment !== '') {
      this.espHost = this.route.snapshot.fragment;
      this.service.setEspHost(this.espHost);
      console.log('set host: ', this.espHost);
    }
   }

  reloadSwitches(): void {
    this.service.getSwitches('').
    subscribe( switches2 => {
      this.switches = [];
      switches2.forEach(ele => {
        this.switches.push(
          new EntitySwitch(
            ele.i,
            ele.n,
            this.espHost !== '' ? 'http://' + this.espHost + '/esocket?no=' + ele.i + '&sw=1' : '/esocket?no=' + ele.i + '&sw=1',
            this.espHost !== '' ? 'http://' + this.espHost + '/esocket?no=' + ele.i + '&sw=0' : '/esocket?no=' + ele.i + '&sw=0',
            this.espHost !== '' ? 'http://' + this.espHost + '/edelete?no=' + ele.i + '&sw=0' : '/edelete?no=' + ele.i + '&sw=0'
          ));
      });
    } );
  }

}
