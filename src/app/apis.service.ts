import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApisService {

  base_url: string = 'http://localhost:9090/'
  constructor(private http :HttpClient) { }
}
