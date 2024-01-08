import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { PopupsService } from './popups.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  constructor(private storage: StorageService, ) {}
 headers = new HttpHeaders({
    'authorization':`${this.storage.getToken()}`
})
}
