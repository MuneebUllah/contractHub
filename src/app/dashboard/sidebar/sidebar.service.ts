import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApisService } from 'src/app/apis.service';
import { VeriablesService } from 'src/app/veriables.service';

@Injectable({
  providedIn: 'root',
})
export class sidebarService {
  constructor(private http: HttpClient , private api : ApisService , private VeriablesService:VeriablesService) {}

  getCompanies(): Observable<any> {
    const headers = new HttpHeaders({
      'authorization': `${localStorage.getItem('token')}`
    });

    return this.http.get(this.api.base_url + 'api/user/getUserCompanies', { headers }).pipe(
      map((response: any) => {
          // response;
        // You can process the response data here if needed
        return response;
      })
    );
  }
}
