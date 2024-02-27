import { Injectable, NgZone } from '@angular/core';
import { User } from '../models/user';
import { BehaviorSubject, Observable, Subject, catchError, delay, map, of, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/enviroments/environment';
const endpoint: any = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject: Subject<User> = new Subject<User>();
  public auth2: any;
  constructor(
    private http: HttpClient,
    private router: Router,
    private ngZone: NgZone
  ) {
    //this.googleInit();
    sessionStorage.getItem("us") ? this.user = JSON.parse(sessionStorage.getItem("us")!) : null;
  }
  
  get token(): string {
    return sessionStorage.getItem('token') || '';
  }
  private _user: any; // Ajusta el tipo de '_user' según tu implementación
  private _userSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  get user(): any {
    return this._user;
  }

  set user(newUser: any) {
    this._user = newUser;
    this._userSubject.next(newUser);
  }

  get userChange(): Observable<any> {
    return this._userSubject.asObservable();
  }
  setUser(newUser: User) {
    this.user = newUser;
    this.userSubject.next(newUser); // Emitir el nuevo User a los observadores
  }

  getUserObservable() {
    return this.userSubject.asObservable();
  }
  

  logout() {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('us');
    this._user = null;
    this.user = null;
  }

  login(formData: any) {
    return this.http.post(`${endpoint}/login`, formData).pipe(
      tap((resp: any) => {
        sessionStorage.setItem('token', resp.token);
        sessionStorage.setItem('us', JSON.stringify(resp.usuario));
        this.user(resp.usuario)
      })
    );
  }

  createUser(formData: any) {
    //pendiente de *RegisterForm
    console.log("Dentro")
    return this.http.post(`${endpoint}/usuarios`, formData);
    // return this.http.post(`${endpoint}/login/sendMail`, formData);
  }

  updateUser(newUser:User) {
    return this.http.put(`${endpoint}/Users/` + newUser.uid, newUser, {
      headers: {
        'x-token': this.token,
      },
    });
  }

  updateRole(userUpdate:User) {
    return this.http.put(`${endpoint}/Users/` + userUpdate.uid, userUpdate, {
      headers: {
        'x-token': this.token,
      },
    });
  }
  loginGoogle(token: string) {
    return this.http.post(`${endpoint}/login/google`, { token }).pipe(
      tap((resp: any) => {
        sessionStorage.setItem('token', resp.token);
      })
    );
  }

  validateToken(): Observable<boolean> {
    return this.http
      .get(`${endpoint}/login/renew`, {
        headers: {
          'x-token': this.token,
        },
      })
      .pipe(
        map((resp: any) => {
          const { email, name, role, uid, google, img, fondo  } = resp.User;
          this.user = new User(name, email, img, uid, role, google,fondo);
          sessionStorage.setItem('token', resp.token);
          return true;
        }),
        map((resp) => true),
        catchError((error) => of(false))
      );
  }

  getUsers( desde:number = 0) {
    return this.http.get(`${endpoint}/Users?desde=${ desde }`, {
      headers: {
        'x-token': this.token,
      }
    })
    .pipe(
      delay(500),
      map( (resp:any) => {
         let Users = resp.Users as User[];
         Users = Users.map(user => new User(user.name, user.email,user.img, user.uid, user.role, user.google,))
        return {
          Users,
          total: resp.total
        };
      })
    )
  }

  getUserByUID(uid:any) {
    return this.http.get(`${endpoint}/Users/us/${uid}`, {
      headers: {
        'x-token': this.token,
      }
    })
    .pipe(
      delay(500),
      map( (resp:any) => {
         let user = resp.user[0] as User;
        return {
          user
        };
      })
    )
  }
}
