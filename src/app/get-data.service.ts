import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ILink } from './link';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  private _url: string = "/tripwire/assets/data/links.json";

  constructor(private http: HttpClient) { }

  getJson():Observable<ILink[]>{
    return this.http.get<ILink[]>(this._url);
  }
  
}
