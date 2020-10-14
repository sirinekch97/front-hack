import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})


export class SensorService {
  baseURL = environment.baseUrl;
  authenticated: Boolean=false;

  constructor(private http: HttpClient) { }
  login(username, password){
    return this.http.post(this.baseURL+'/api/login',{username: username ,password: password})
  }
  getAllTemp()
{
  return this.http.get(this.baseURL +'/sensor/findTemp')
}
getAllHmid()
{
  return this.http.get(this.baseURL +'/sensor/findHumid')
}
getAllGaz()
{
  return this.http.get(this.baseURL +'/sensor/findGaz')
}
getAllRain()
{
  return this.http.get(this.baseURL +'/sensor/findRain')
}
getAllWind()
{
  return this.http.get(this.baseURL +'/sensor/findWind')
}
}
