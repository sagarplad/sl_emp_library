import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, catchError, tap } from 'rxjs';
const token = 'sdfhsdgfhjsdghshjsdjhhjdfds'
@Injectable()
export class HttpInterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Modify request headers
    const modifiedRequest = request.clone({
      // setHeaders: {
      //   Authorization: `Bearer ${token}`
      // }
    });
  
    // Log the request URL
    console.log('Request URL:', request.url);
  
    // Handle the request
    return next.handle(modifiedRequest).pipe(
      tap((event: any) => {
        // Log the response
        if (event instanceof HttpResponse) {
          console.log('Response:', event);
        }
      }),
      catchError(error => {
        // Handle errors
        console.error('Error occurred:', error);
        throw error;
      })
    );
  }
  
}
