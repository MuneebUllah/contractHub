import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
   token = this.storage.getToken();
  constructor(private storage: StorageService) {}

 headers = new HttpHeaders ({

      'authorization': `Bearer ${this.token}`,

  })
}
