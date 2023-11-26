import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../user/user.types';
import { LoginRequest } from './sign-in.types';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private readonly _httpClient:  HttpClient
  ) { }

  readonly baseUrl: string = `${environment.apiUrl}/login`;

  login(req: LoginRequest): Observable<User>{
    return this._httpClient.post<User>(this.baseUrl, req)
      .pipe()
  }
}
