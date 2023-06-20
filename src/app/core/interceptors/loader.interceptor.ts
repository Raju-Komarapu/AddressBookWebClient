import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { SpinnerVisibilityService } from 'ng-http-loader';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  constructor(private loaderService: SpinnerVisibilityService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loaderService.show()
    return next.handle(request).pipe(finalize(() => this.loaderService.hide()));
  }
}
