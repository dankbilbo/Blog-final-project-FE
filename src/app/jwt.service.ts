import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor(private http : HttpClient) { }

  login(username : string, password : string){
    // return this.http.post()
  }
}
