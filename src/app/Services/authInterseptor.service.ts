import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpHeaders } from '@angular/common/http';
import { HeaderService } from './header.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private headerService: HeaderService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    const modifiedRequest = request.clone({
      headers: this.headerService.headers(),
    });

    return next.handle(modifiedRequest);
  }
}
