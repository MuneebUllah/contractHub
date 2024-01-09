import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class RoutingService {
  // =========== CONSTRUCTOR ============

  constructor(private routes: Router,
    private activatedRoute: ActivatedRoute,
    private location: Location) { }

  customRoute(route: string) {
    this.routes.navigate([route]);
  }

  goToHome(data?: any) {
    if (data)
      this.routes.navigate([""], { queryParams: data })
    else
      this.routes.navigate(['']);
  }
  goToLogin(){
    this.routes.navigate(['/login'])
  }
  goToSignup(){
    this.routes.navigate(['/signup'])
  }
  goToDashboard(data:any){
    this.routes.navigate([`/dashboard/${data}` ]);
  }
  goToDocument(data:any){
    this.routes.navigate([`/dashboard/${data}/document` ]);
  }
  goToTemplete(data:any){
    this.routes.navigate([`/dashboard/${data}/templete` ]);
  }
  goToContact(data:any){
    this.routes.navigate([`/dashboard/${data}/contact` ]);
  }
  goToSetting(data:any){
    this.routes.navigate([`/dashboard/${data}/setting` ]);
  }
  goToAccount(data:any){
    this.routes.navigate([`/dashboard/${data}/account` ]);
  }
  goToCreateAccount(data:any){
    this.routes.navigate([`/new-account` ]);
  }
  goToViewDoc(data:any){
    this.routes.navigate([`/dashboard/${data}/view-doc` ]);
  }

  goToProdDetails(slug: string) {
    this.routes.navigate(['/product-details', slug]);
  }


  goToProductDetails(id: number) {
    this.routes.navigate(['/product-details']);
  }

  goToMyProfile() {
    this.routes.navigate(['/my-profile'])
  }

  goToUserProfile(id: string) {
    this.routes.navigate([`/chats/profile/${id}`])
  }


  goToProducts(query?: any) {
    this.routes.navigate([`/products`], { queryParams: query })
  }

  goToSettings() {
    this.routes.navigate(['/settings']);
  }

  goBack() {
    this.location.back()
  }
}
