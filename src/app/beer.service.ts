import { Injectable } from '@angular/core';
import { Beer } from './beers/models/beers.model';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

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

  // getBeer(tapNum: number): Observable<Beer> {
  //   // TODO: send the message _after_ fetching the hero
  //   this.messageService.add(`BeerService: fetched beer tapNum=${tapNum}`);
  //   return of(BEERS.find(beer => beer.tapNum === tapNum));
  // }

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
}
