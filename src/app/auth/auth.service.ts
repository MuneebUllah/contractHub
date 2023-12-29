// auth.service.ts
import { Injectable, EventEmitter, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {
  private token = localStorage.getItem('token');
  public inactivityTimeout: any;
  public inactivityTimerExpired: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {
    this.resetTimer();
    this.setupListeners();
  }
  ngOnInit(): void {
    
  }

  private setupListeners(): void {
    window.addEventListener('mousemove', () => this.resetTimer());
    window.addEventListener('keypress', () => this.resetTimer());
    window.addEventListener('scroll', () => this.resetTimer());
    window.addEventListener('touchstart', () => this.resetTimer());
  }

  private resetTimer(): void {
    clearTimeout(this.inactivityTimeout);
    this.inactivityTimeout = setTimeout(() => {
      this.inactivityTimerExpired.emit(true);
    },  60 * 1000); 
  }

  isTokenExpired(): any {
    if(this.token === null){
    return true; 
  }
  // else if(this.inactivityTimerExpired){
  //   return true
  // }
  else{

    return false;
  }
}
}





