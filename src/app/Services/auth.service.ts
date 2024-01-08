import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { PopupsService } from './popups.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private storage: StorageService,
    ) {}

  get isLogin(): boolean {
    return this.storage.isAuthenticated();
  }
}
