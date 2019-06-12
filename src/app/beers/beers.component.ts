import { Component, OnInit } from '@angular/core';
import { Beer } from './models/beers.model';
import { BeerService } from '../beer.service';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.css']
})
export class BeersComponent implements OnInit {

  constructor( private beerService: BeerService) { }
  
  beers: Beer[];

  getBeers(): void {
    this.beerService.getBeers()
      .subscribe(beers => this.beers = beers);
  }

  ngOnInit() {
    this.getBeers();
  }

}
