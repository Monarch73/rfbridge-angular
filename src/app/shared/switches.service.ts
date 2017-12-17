import { EntityNewSwitch } from './entity-new-switch';
import { EntitySwitch } from './entity-switch';
import { EntityJsonSwitch } from './entity-json-switch';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map as rxMap, retry } from 'rxjs/operators';

@Injectable()
export class SwitchesService {

  public espHost: string;

  constructor(
    private http: HttpClient) {
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
    const myheaders = new HttpHeaders();
    const mybody = new HttpParams().
    append('name', newSwitch.name).
    append('house', newSwitch.houseCode).
    append('code', newSwitch.deviceCode).
    append('tri1', newSwitch.triStateOn).
    append('tri2', newSwitch.triStateOff).
    append('url1', newSwitch.urlOn).
    append('url2', newSwitch.urlOff);
    myheaders.append('Content-Type', 'application/form-data');
    this.http.post(
      this.espHost !== '' ? 'http://' + this.espHost + '/estore' : '/estore',
      mybody, { headers: myheaders } )
      .subscribe(() => { console.log('switch saved'); } );
  }

  public setEspHost(espHost: string): void {
    this.espHost = espHost;
    console.log('espHost ist jetzt ', this.espHost);
  }
}
