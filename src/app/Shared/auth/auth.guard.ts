// auth.guard.ts
import { Injectable, OnInit } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { RoutingService } from 'src/app/Services/routing.service';
import { StorageService } from 'src/app/Services/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  public value: boolean;
  constructor(
    public routing: RoutingService,
    public storage: StorageService
  ) {
    this.value = false;
  }

  canActivate(): boolean {
    const isAuthenticated = this.storage.isAuthenticated();
    if (!isAuthenticated) {
      this.routing.goToLogin();

    }
    return true;
  }
}