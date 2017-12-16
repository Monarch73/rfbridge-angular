import { EntityNewSwitch } from './entity-new-switch';
import { EntitySwitch } from './entity-switch';
import { EntityJsonSwitch } from './entity-json-switch';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map as rxMap, retry } from 'rxjs/operators';

@Injectable()
export class SwitchesService {

  constructor(private http: HttpClient) { }

  public sendUrl(url: string): void {
    console.log('sending request');
    this.http.get<any>(url).subscribe( () => { console.log('request sent'); });
  }

  public getSwitches(url: string) {
    return this.http.get<EntityJsonSwitch[]>('http://192.168.1.86/jsonList').pipe(
      retry(3));
  }

  public postNewSwitch(url: string, newSwitch: EntityNewSwitch) {
    this.http.post(
      'http://192.168.1.86/estore',
      {
        name: newSwitch.name,
        house: newSwitch.houseCode,
        code: newSwitch.deviceCode,
        tri1: newSwitch.triStateOn,
        tri2: newSwitch.triStateOff,
        url1: newSwitch.urlOn,
        url2: newSwitch.urlOff
      } )
      .subscribe(() => { console.log('switch saved'); } );
  }

}
