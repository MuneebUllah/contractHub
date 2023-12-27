// auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token = localStorage.getItem('token');
  isTokenExpired(): any {
    if(this.token === null){
    return true; 
  }
  else{

    return false;
  }
}
}
