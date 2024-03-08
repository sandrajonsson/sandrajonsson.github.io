import { Injectable } from '@angular/core';
import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Brewery } from './api/brewery-api.service';

@Injectable({
  providedIn: 'root',
})
export class BreweryService {
  endpoint = 'https://api.openbrewerydb.org';

  constructor(private httpClient: HttpClient) {}

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getBreweries(): Observable<Brewery> {
    return this.httpClient
      .get<Brewery>(this.endpoint + '/breweries?per_page=10')
      .pipe(retry(1), catchError(this.processError));
  }

  getBreweryByPage(query: any, pageNumber: any): Observable<Brewery> {
    return this.httpClient
      .get<Brewery>(
        this.endpoint +
          '/breweries/search?query=' +
          query +
          '&page=' +
          pageNumber +
          '&per_page=10'
      )
      .pipe(retry(1), catchError(this.processError));
  }

  getBreweryByPageOnly(pageNumber: any): Observable<Brewery> {
    return this.httpClient
      .get<Brewery>(
        this.endpoint + '/breweries?&page=' + pageNumber + '&per_page=10'
      )
      .pipe(retry(1), catchError(this.processError));
  }

  getBreweryByQuery(query: any): Observable<Brewery> {
    return this.httpClient
      .get<Brewery>(
        this.endpoint + '/breweries/search?query=' + query + '&per_page=10'
      )
      .pipe(retry(1), catchError(this.processError));
  }

  processError(err: any) {
    let message = '';
    if (err.error instanceof ErrorEvent) {
      message = err.error.message;
    } else {
      message = `Error Code: ${err.status}\nMessage: ${err.message}`;
    }
    console.log(message);
    return throwError(message);
  }
}
