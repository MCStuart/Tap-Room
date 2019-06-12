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

  constructor( private messageService: MessageService) {}

}
