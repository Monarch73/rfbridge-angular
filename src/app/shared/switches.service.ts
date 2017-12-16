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

}
