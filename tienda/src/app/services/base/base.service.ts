import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map, tap } from 'rxjs';
import { User } from 'src/app/models/user';
import { UserService } from '../user.service';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(
    private http: HttpClient,
  ) {
   }
  
  get token(): string {
    return sessionStorage.getItem('token') || '';
  }
  postItem(url:string,formData: any, ) {
    return this.http.post(url, formData,  {
      headers: {
        'x-token': this.token,
      }
    })
  }
  putItem(url:string,formData: any, ) {
    return this.http.put(url, formData,  {
      headers: {
        'x-token': this.token,
      }
    })
  }
  getItems(url:string) {
    return this.http.get(url, {
      headers: {
        'x-token': this.token,
      }
    })
  }

  getItemsByUid(url:string) {
    return this.http.get(url, {
      headers: {
        'x-token': this.token,
      }
    })
  }

  getItemsById(url:string) {
    return this.http.get(url, {
      headers: {
        'x-token': this.token,
      }
    })
  }
}
