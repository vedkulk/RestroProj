import { RestaurantClass } from './model/restaurantClass';
import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { RestaurantsService } from '../restaurants.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-restaurants-list',
  standalone: true,
  templateUrl: './restaurants-list.component.html',
  imports: [CommonModule],
  styleUrls: ['./restaurants-list.component.css'],
})
export class RestaurantsListComponent implements OnInit {
  @Input() restaurants: RestaurantClass[] = [];
  @Output() restaurantSelected = new EventEmitter<RestaurantClass>();
  error: string = '';

  constructor(
    private restaurantsService: RestaurantsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.restaurants.length === 0) {
      this.loadRestaurants();
    }
  }

  loadRestaurants(): void {
    this.error = '';

    this.restaurantsService.getRestaurants().subscribe({
      next: (restaurants) => {
        this.restaurants = restaurants;
        console.log('Restaurants loaded:', restaurants);
      },
      error: (error) => {
        console.error('Failed to load restaurants:', error);
        this.error = 'Failed to load restaurants. Please try again.';
      },
    });
  }

  selectRestaurant(rest: RestaurantClass) {
    this.restaurantsService.setSelectedRestaurant(rest);
    this.router.navigate(['/booking']);
  }
}
