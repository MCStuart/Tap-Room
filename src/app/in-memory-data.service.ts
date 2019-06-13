import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Beer } from './beers/models/beers.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {

  // private beersUrl = 'api/beers';  // URL to web api
  createDb() {
    const beers = [
      { breweryName: "BoneYard", beerName: "RPM", ABV: "6.2", style: "IPA", price: 6, tapNum: 1, id:  0},
      { breweryName: "Deschutes", beerName: "Mirror Pond", ABV: "5.5", style: "Pale", price: 6, tapNum: 2, id: 1 },
      { breweryName: "Pabst", beerName: "Blue Ribbon", ABV: "4.3", style: "Lager", price: 2, tapNum: 3, id: 2 }
    ]; 
  return {beers};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (0).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(beers: Beer[]): number {
    return beers.length > 0 ? Math.max(...beers.map(beer => beer.id)) + 1 : 4;
  }

 
}