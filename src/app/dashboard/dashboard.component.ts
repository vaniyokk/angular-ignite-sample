import { Component, OnInit } from '@angular/core';
import { Hero } from '../models/hero';
import { GroceryItem } from '../models/grocery-item';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent {
  protected GroceriesModel = new GroceryItem();
  protected HeroModel = new Hero();
}
