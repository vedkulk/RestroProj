import { Component } from '@angular/core';
import { RestaurantClass } from './model/restaurantClass';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-restaurants-list',
  standalone: true, 
  templateUrl: './restaurants-list.component.html',
  imports: [CommonModule],
  styleUrls: ['./restaurants-list.component.css'] // ✅ correct spelling
})
export class RestaurantsListComponent {
  restaurants: RestaurantClass[] = [
    {
      id: 1,
      name: 'Spice Hub',
      address: 'MG Road, Pune',
      cuisine: 'Indian',
      open_time: '10:00 AM',
      close_time: '11:00 PM',
      no_of_tables: 20
    },
    {
      id: 2,
      name: 'Ocean Breeze',
      address: 'Juhu Beach, Mumbai',
      cuisine: 'Seafood',
      open_time: '12:00 PM',
      close_time: '12:00 AM',
      no_of_tables: 15
    },
    {
      id: 3,
      name: 'Green Leaf',
      address: 'Koramangala, Bangalore',
      cuisine: 'Vegan',
      open_time: '9:00 AM',
      close_time: '10:00 PM',
      no_of_tables: 10
    }
  ];
}

