import { SwitchesService } from './../../shared/switches.service';
import { NgForm } from '@angular/forms';
import { EntityNewSwitch } from './../../shared/entity-new-switch';
import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'rf-new-switch',
  templateUrl: './new-switch.component.html',
  styleUrls: ['./new-switch.component.scss']
})
export class NewSwitchComponent implements OnInit {

  public switch: EntityNewSwitch;

  @Output()
  switchCreated = new EventEmitter<EntityNewSwitch>();

  constructor(public service: SwitchesService) {
    this.switch = new EntityNewSwitch('', '', '', '', '', '', '');
   }

   @ViewChild('switchForm')
   switchForm: NgForm;

  ngOnInit() {
  }

  public add(): void {
    this.service.postNewSwitch('', this.switch);
    this.switchCreated.emit(this.switch);
    this.switch = new EntityNewSwitch('', '', '', '', '', '', '');
    this.switchForm.resetForm(this.switch);
  }

}
