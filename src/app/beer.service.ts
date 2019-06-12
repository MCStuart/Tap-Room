import { Injectable } from '@angular/core';
import { Beer } from './beers/models/beers.model';
import { BEERS } from './beers/beers.model.mock';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})

export class BeerService {

  getBeers(): Observable<Beer[]> {
    this.messageService.add('BeerService: fetched beers');
    return of(BEERS);
  }

  getBeer(tapNum: number): Observable<Beer> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`BeerService: fetched beer tapNum=${tapNum}`);
    return of(BEERS.find(beer => beer.tapNum === tapNum));
  }

  constructor( private messageService: MessageService) {}

}
