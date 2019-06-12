import { Component, OnInit, Input } from '@angular/core';
import { Beer } from '../beers/models/beers.model';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { BeerService }  from '../beer.service';
@Component({
  selector: 'app-beer-detail',
  templateUrl: './beer-detail.component.html',
  styleUrls: ['./beer-detail.component.css']
})
export class BeerDetailComponent implements OnInit {
  @Input() beer: Beer;

  constructor( 
    private route:ActivatedRoute,
    private beerService: BeerService,
    private location: Location) { }

  ngOnInit(): void {
    this.getBeer();
  }

  getBeer(): void {
    const tapNum = +this.route.snapshot.paramMap.get('tapNum');
    this.beerService.getBeer(tapNum)
      .subscribe(beer => this.beer = beer);
  }

  goBack(): void {
    this.location.back();
  }
}
