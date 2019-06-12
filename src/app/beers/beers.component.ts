import { Component, OnInit } from '@angular/core';
import { Beer } from './models/beers.model';
import { BEERS} from './beers.model.mock'

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.css']
})
export class BeersComponent implements OnInit {

  beers = BEERS;
  constructor() { }

  ngOnInit() {
  }

}
