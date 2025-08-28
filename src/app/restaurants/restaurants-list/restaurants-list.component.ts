import { RestaurantClass } from './model/restaurantClass';
import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { RestaurantsService } from '../restaurants.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurants-list',
  standalone: true, 
  templateUrl: './restaurants-list.component.html',
  imports: [CommonModule],
  styleUrls: ['./restaurants-list.component.css']
})
export class RestaurantsListComponent implements OnInit {
  @Input() restaurants: RestaurantClass[] = [];
  @Output() restaurantSelected = new EventEmitter<RestaurantClass>();


  constructor(private restaurantsService: RestaurantsService,   private router: Router) {}

  ngOnInit(): void {
    if (this.restaurants.length === 0) {
      this.restaurants = this.restaurantsService.getRestaurants();
    }
  }

  selectRestaurant(rest: RestaurantClass) {
    this.restaurantsService.setSelectedRestaurant(rest);
    this.router.navigate(['/booking']);
  }
}

