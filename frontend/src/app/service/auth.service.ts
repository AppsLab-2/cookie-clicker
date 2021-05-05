import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: string;

  constructor(private httpClient: HttpClient) { }

  isLoggedIn(): boolean {
    return !!this.token;
  }

  login(username: string, password: string) {
    const token = `Basic ${btoa(`${username}:${password}`)}`;
    const options = {
      headers: new HttpHeaders({
        Authorization: token,
        'X-Requested-With' : 'XMLHttpRequest'
      }),
      withCredentials: true
    }
    return this.httpClient.get(`${environment.api}/user`, options).pipe(
      tap(() => this.token = token)
    );
  }

  logout(): void {
    this.token = null;
  }
}
