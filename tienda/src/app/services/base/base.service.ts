import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map, tap } from 'rxjs';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(
    private http: HttpClient,
  ) { }
  
  get token(): string {
    return sessionStorage.getItem('token') || '';
  }
  postItem(url:string,formData: any, type:any) {
    return this.http.post(url, formData).pipe(
      tap((resp: any) => {
        sessionStorage.setItem('token', resp.token);
        sessionStorage.setItem('us', JSON.stringify(resp.User));
      }))
  }

  getItems(url:string) {
    return this.http.get(url, {
      headers: {
        'x-token': this.token,
      }
    })
  }
}
