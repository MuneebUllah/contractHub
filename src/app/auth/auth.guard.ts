// auth.guard.ts
import { Injectable, OnInit } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate , OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.authService.isTokenExpired()) {
      localStorage.clear();
      this.router.navigate(['/login']);
  
      return false;
    }

    return true;
  }

  ngOnInit(): void {
    
  }
}
