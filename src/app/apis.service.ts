import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApisService {

  base_url: string = 'http://localhost:9090/api'
  constructor(private http :HttpClient) { }
  register(body:any){
   return this.http.post(this.base_url+'/user/register' , body)
  }
  signIn(body:any){
   return this.http.post(this.base_url+'/user/login' , body)
  }
  stepperView(body:any , headers:any){
   return this.http.post(this.base_url+'/user/createCompany' , body  , { headers })
  }
  getFolders(headers:any){
    return this.http.get(this.base_url + '/user/getAllFolders' , { headers })
  }
  getCompanies(headers:any){
    return this.http.get(this.base_url + '/user/getUserCompanies' , { headers })
  }
  sentFile(body:any , headers:any){
    console.log(body , headers);  
    return this.http.post(this.base_url + '/user/saveDocumentToServer'  , {headers})
  }
  getDocument(headers:any){
    return this.http.get(this.base_url + '/user/getAllDocuments' , { headers })
  }
  deleteDocument(headers:any , id:string){
    return this.http.delete(this.base_url + `/user/deleteDocument/${id}` , { headers })
  }

}
