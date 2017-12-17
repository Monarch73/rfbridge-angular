import { EntityNewSwitch } from './entity-new-switch';
import { EntitySwitch } from './entity-switch';
import { EntityJsonSwitch } from './entity-json-switch';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map as rxMap, retry } from 'rxjs/operators';

@Injectable()
export class SwitchesService {

  public espHost: string;

  constructor(private http: HttpClient) {
    this.espHost = '';
  }

  public sendUrl(url: string): void {
    console.log('sending request');
    this.http.get<any>(url).subscribe( () => { console.log('request sent'); });
  }

  public getSwitches(url: string) {
    console.log('Hole jsonList von: ', this.espHost !== '' ? this.espHost : 'localhost');
    return this.http.get<EntityJsonSwitch[]>(
      this.espHost !== '' ? 'http://' + this.espHost + '/jsonList' : '/jsonList')
      .pipe(retry(3));
  }

  public postNewSwitch(url: string, newSwitch: EntityNewSwitch) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/form-data');
//    return this.http.post(url, body, {headers: headers })
    this.http.post(
      this.espHost !== '' ? 'http://' + this.espHost + '/estore' : '/estore',
      {
        name: newSwitch.name,
        house: newSwitch.houseCode,
        code: newSwitch.deviceCode,
        tri1: newSwitch.triStateOn,
        tri2: newSwitch.triStateOff,
        url1: newSwitch.urlOn,
        url2: newSwitch.urlOff
      } , {headers: headers })
      .subscribe(() => { console.log('switch saved'); } );
  }

  public setEspHost(espHost: string): void {
    this.espHost = espHost;
    console.log('espHost ist jetzt ', this.espHost);
  }
}
