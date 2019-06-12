import { Injectable } from '@angular/core';
import { Beer } from './beers/models/beers.model';
// import { BEERS } from './beers/beers.model.mock';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class BeerService {

  private beersUrl = 'api/beers'; 

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getBeers(): Observable<Beer[]> {
    // this.messageService.add('BeerService: fetched beers');
    // return of(BEERS);
    return this.http.get<Beer[]>(this.beersUrl)
    
  }

  getBeer(tapNum: number): Observable<Beer> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`BeerService: fetched beer tapNum=${tapNum}`);
    return of(BEERS.find(beer => beer.tapNum === tapNum));
  }


  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}
