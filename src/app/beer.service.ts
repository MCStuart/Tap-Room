import { Injectable } from '@angular/core';
import { Beer } from './beers/models/beers.model';
import { BEERS } from './beers/beers.model.mock';

@Injectable({
  providedIn: 'root',
})

export class BeerService {

  getBeers(): Beer[] {
    return BEERS;
  }

  constructor() { }

}
