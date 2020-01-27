import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {}

  register(user)
  {
    return this._http.post('/register', user);
  }

  login(user)
  {
    return this._http.post('/login', user);
  }

}
