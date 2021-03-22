import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from "../environments/environment";
import {tap} from "rxjs/operators";

const API_URL = `${environment.apiURL}`

@Injectable({
  providedIn: 'root'
})

export class JwtService {

  constructor(private http: HttpClient) {
  }

  login(username: string, password: string) {
    return this.http.post<{ access_token: string }>(`${API_URL}/login`, {username, password})
      .pipe(tap(res => {
        localStorage.setItem("access_token", res.access_token);
      }));
  }

  register(username:string, password:string) {
    return this.http.post<{access_token: string}>(`${API_URL}/register`, {username, password}).pipe(tap(res => {
      this.login(username, password);
    }));
  }

  logout(){
    localStorage.removeItem('access_token')
  }

  public loggedIn() : boolean{
    return localStorage.getItem('access_token')  !== null;
  }
}
