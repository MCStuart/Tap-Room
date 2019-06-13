import { Injectable } from '@angular/core';
import { Beer } from './beers/models/beers.model';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})

export class BeerService {

  private beersUrl = 'api/beers'; 

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getBeers(): Observable<Beer[]> {
    return this.http.get<Beer[]>(this.beersUrl)
      .pipe(
        catchError(this.handleError<Beer[]>('getBeers',[]))
      );
    
  }

  /** GET hero by id. Will 404 if id not found */
getBeer(id: number): Observable<Beer> {
  const url = `${this.beersUrl}/${id}`;
  return this.http.get<Beer>(url).pipe(
    tap(_ => this.log(`fetched Beer id=${id}`)),
    catchError(this.handleError<Beer>(`getBeer id=${id}`))
  );
}


  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

    /** PUT: update the beer on the server */
  updateBeer (beer: Beer): Observable<any> {
    return this.http.put(this.beersUrl, beer, httpOptions).pipe(
      tap(_ => this.log(`updated beer id=${beer.id}`)),
      catchError(this.handleError<any>('updateBeer'))
    );
  }

    /** POST: add a new hero to the server */
  addBeer (beer: Beer): Observable<Beer> {
    console.log("inside addbeer");
    
    return this.http.post<Beer>(this.beersUrl, beer, httpOptions).pipe(
      tap((newBeer: Beer) => this.log(`added beer w/ id=${newBeer.id}`)),
      catchError(this.handleError<Beer>('addBeer'))
    );
}

}

