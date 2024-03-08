import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Observable,
  catchError,
  forkJoin,
  map,
  retry,
  startWith,
  throwError,
} from 'rxjs';

type BREWERY_TYPES =
  | 'alt prop'
  | 'bar'
  | 'beer brand'
  | 'brewpub'
  | 'cidery'
  | 'closed'
  | 'contract'
  | 'large'
  | 'location'
  | 'micro'
  | 'nano'
  | 'office only location'
  | 'planning'
  | 'proprietor'
  | 'regional'
  | 'taproom';

export type Brewery = {
  id: string;
  name?: string;
  brewery_type?: BREWERY_TYPES;
  address_1?: string | null;
  address_2?: string | null;
  address_3?: string | null;
  city?: string;
  state_province?: string;
  postal_code?: string;
  country?: string;
  longitude?: string | null;
  latitude?: string | null;
  phone?: string | null;
  website_url?: string | null;
  state?: string;
  street?: string | null;
};

type state = 'init' | 'loading' | 'matchFound' | 'noMatch' | 'error';

export type httpReqState = {
  data?: Brewery[];
  state: state;
  errorMessage?: string | undefined;
};

@Injectable({
  providedIn: 'root',
})
export class BreweryApiService {
  constructor(private http: HttpClient) {}
  baseUrl = 'https://api.openbrewerydb.org/v1/breweries';

  resToState = (
    res: Brewery[],
    stateOverride?: state | undefined
  ): httpReqState => {
    if (res.length === 0) {
      return { state: 'noMatch' };
    } else {
      return { data: res, state: stateOverride || 'matchFound' };
    }
  };

  processError(err: any) {
    let message = '';
    if (err.error instanceof ErrorEvent) {
      message = err.error.message;
    } else {
      message = `Error Code: ${err.status}\nMessage: ${err.message}`;
    }
    return throwError(() => ({ state: 'error', errorMessage: message }));
  }

  autocomplete(query: string, nrOfResponses: number): Observable<httpReqState> {
    return this.http
      .get<Brewery[]>(`${this.baseUrl}/autocomplete?query=${query}`)
      .pipe(
        map((x) => {
          const slicedMatches = x.slice(0, nrOfResponses);
          return this.resToState(slicedMatches, 'loading');
        }),
        retry(1),
        catchError(this.processError)
      );
  }

  getDetailsForAll(breweries: Brewery[]): Observable<httpReqState> {
    const detailsObservable$ = breweries.map((brewery) => {
      return this.getBrewery(brewery.id);
    });

    return forkJoin(detailsObservable$).pipe(
      map((x) => this.resToState(x)),
      retry(1),
      catchError(this.processError)
    );
  }

  getBrewery(id: string): Observable<Brewery> {
    return this.http
      .get<Brewery>(`${this.baseUrl}/${id}`)
      .pipe(retry(1), catchError(this.processError));
  }

  getBreweriesByQuery(query: string): Observable<httpReqState> {
    return this.http
      .get<Brewery[]>(`${this.baseUrl}/search?query=${query}`)
      .pipe(
        map((res) => {
          return this.resToState(res);
        }),
        retry(1),
        catchError(this.processError)
      );
  }

  getAllBreweries(): Observable<httpReqState> {
    return this.http.get<Brewery[]>(`${this.baseUrl}`).pipe(
      map((res) => {
        return this.resToState(res);
      }),
      retry(1),
      catchError(this.processError)
    );
  }
}
