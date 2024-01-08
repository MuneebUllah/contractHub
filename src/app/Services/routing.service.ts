import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Path } from '../Shared/helpers/enums/constants';
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


  goToChooseAdCategory() {
    this.routes.navigate(['/choose-ad-category']);
  }

  goToPostAd(queryParams: any) {
    const query = {
      id: queryParams.id,
      categoryNode: queryParams.node.join(',')
    }
    this.routes.navigate(['/post-your-ad'], { queryParams: query });
  }

  goToPostAdSlug(queryParams: any) {
    this.routes.navigate(['/post-your-ad'], { queryParams: queryParams });
  }

  goToProdDetails(slug: string) {
    this.routes.navigate(['/product-details', slug]);
  }

  goToAds() {
    this.routes.navigate(['/ads']);
  }

  goToProductDetails(id: number) {
    this.routes.navigate(['/product-details']);
  }

  goToMyProfile() {
    this.routes.navigate(['/my-profile'])
  }

  goToNotifications() {
    this.routes.navigate([Path.notifications])
  }

  goToUserProfile(id: string) {
    this.routes.navigate([`/chats/profile/${id}`])
  }

  goToChat(slug: any = undefined, data?: any) {
    if (data && slug)
      this.routes.navigate(["/chats", slug], { queryParams: data })
    else if (slug) this.routes.navigate([`/chats/${slug}`])
    else this.routes.navigate([`/chats`]);
  }

  updateSlugOnchat(newSlug: string) {
    this.routes.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: { slug: newSlug },
      queryParamsHandling: 'merge', // This ensures that other query parameters are not removed
    });
  }


  goToProducts(query?: any) {
    this.routes.navigate([`/products`], { queryParams: query })
  }

  goToPrivacyPolicy() {
    this.routes.navigate(['/privacy-policy']);
  }

  goToMyAds() {
    this.routes.navigate(['/ads/my-ads']);
  }

  goToTermsAndConditions() {
    this.routes.navigate(['/terms-and-conditions']);
  }

  goToHelp() {
    this.routes.navigate(['/help']);
  }

  goToSettings() {
    this.routes.navigate(['/settings']);
  }

  goBack() {
    this.location.back()
  }
}
