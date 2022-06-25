import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class GenericHttpService {

  baseurl = 'https://localhost:7095/api/';
  //  baseurl = 'https://kanumuriwa.azurewebsites.net/api/';
  baseurlJson = 'http://localhost:3000/';

  baseheader: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    responseType: 'json'
  });

  constructor(private http: HttpClient) { }

  public HttpGetService(url: string): Observable<any> {
    return this.http.get<any>(`${this.baseurl}${url}`).pipe(catchError(this.errorHandler));
  }

  public HttpInsertService(url: string, body: any): Observable<any> {

    return this.http.post<any>(`${this.baseurl}${url}`, body, { headers: this.baseheader })
      .pipe(catchError(this.errorHandler));
  }

  public HttpEditService(url: string, body: any): Observable<any> {

    return this.http.put<any>(`${this.baseurl}${url}`, body, { headers: this.baseheader })
      .pipe(catchError(this.errorHandler));
  }

  public HttpDeleteService(url: string, body: any): Observable<any> {

    return this.http.post<any>(`${this.baseurl}${url}/id/${body}`, { headers: this.baseheader })
      .pipe(catchError(this.errorHandler));
  }
  private errorHandler(errorHandler: HttpErrorResponse) {
    if (errorHandler.error instanceof ErrorEvent) {
      console.error('CLIENT side error' + JSON.stringify(errorHandler.error));
    } else {
      console.error('SERVER side error' + JSON.stringify(errorHandler));
    }
    return throwError('error in returning from the service,please contact admin');
  }

  public HttpGetServicePromise(url: string): Promise<any> {
    return this.http.get<any>(`${this.baseurl}${url}`).pipe(catchError(() =>
      throwError('error in returning from the service,please contact admin')))
      .toPromise();
  }

  public HttpGetServiceJsonServer(url: string): Observable<any> {
    return this.http.get<any>(`${this.baseurlJson}${url}`).pipe(catchError(this.errorHandler));
  }

}
