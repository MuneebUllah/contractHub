import { Injectable } from '@angular/core';
import { Signup } from '../Shared/models/signup.model';
import { StorageKeys } from '../Shared/helpers/enums/enums';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  notificationPageNum: BehaviorSubject<number> = new BehaviorSubject<number>(1);
  categorySelected: BehaviorSubject<any> = new BehaviorSubject<any>(-1);
  searchInput: Subject<any> = new BehaviorSubject<any>('');
  productsView: Subject<any> = new BehaviorSubject<any>('list');
  isNewNotification: Subject<any> = new BehaviorSubject<any>("default");

  constructor() { }

  user: Signup = new Signup();
  user$: BehaviorSubject<any> = new BehaviorSubject(null);
  token: any = '';

  getProperty(key: string) {
    const val = window.localStorage.getItem(key);
    if (val) {
      return JSON.parse(val);
    }
    return val;
  }

  setProperty(key: string, value: any, parse = true) {
    window.localStorage.setItem(key, JSON.stringify(value));
  }

  removeAllProperties() {
    this.setToken('');
    this.user = new Signup();
    window.localStorage.clear();
    return true;
  }

  isAuthenticated() {
    return this.getToken() ? true : false;
  }

  setToken(token: any) {
    this.token = '';
    this.token = token;
    console.log(this.token)
    localStorage.setItem('token',this.token)
  }

  removeProperty(key: string) {
    window.localStorage.removeItem(key);
    return true;
  }

  getToken(): any {
    this.token = '';
    this.token = localStorage.getItem('token');
    if (!this.token) {
      this.token = '';
    }
    return this.token;
  }

  getUser(): any {
    this.user = new Signup();
    if (this.getProperty(StorageKeys.user) != null) {
      this.user = Object.assign(this.user, this.getProperty(StorageKeys.user));
      this.user$.next(this.user);
      return this.user;
    }
    return false;
  }

  setUser(user: Signup | any) {
    if (!this.user) {
      this.user = new Signup();
    }
    this.user = Object.assign(this.user, user);
    this.setProperty(StorageKeys.user, this.user);
  }

}
