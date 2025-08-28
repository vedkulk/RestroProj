import { Injectable } from '@angular/core';
import { RestaurantClass } from './restaurants-list/model/restaurantClass';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  private restaurants: RestaurantClass[] = [
    { id: 1, name: 'Pizza Palace', address: 'Karve Nagar', cuisine: 'Italian', open_time: '10:00', close_time: '22:00', no_of_tables: 10 },
    { id: 2, name: 'Sushi Spot', address: 'Baner', cuisine: 'Japanese', open_time: '11:00', close_time: '21:00', no_of_tables: 8 },
    { id: 3, name: 'Taco Alfresco', address: 'Bavdhan', cuisine: 'Mexican', open_time: '09:00', close_time: '20:00', no_of_tables: 12 },
    { id: 4, name: 'Spice Symphony', address: 'Kothrud', cuisine: 'Indian', open_time: '08:00', close_time: '23:00', no_of_tables: 15 },
    { id: 5, name: 'Dragon Wok', address: 'Viman Nagar', cuisine: 'Chinese', open_time: '10:30', close_time: '22:30', no_of_tables: 9 },
    { id: 6, name: 'Burger Hub', address: 'Hinjewadi', cuisine: 'American', open_time: '11:00', close_time: '23:30', no_of_tables: 14 },
    { id: 7, name: 'Mediterraneo', address: 'Koregaon Park', cuisine: 'Mediterranean', open_time: '12:00', close_time: '23:00', no_of_tables: 7 },
    { id: 8, name: 'Punjabi Zaika', address: 'Swargate', cuisine: 'Punjabi', open_time: '09:30', close_time: '22:00', no_of_tables: 18 },
  ];
  

  constructor() { }
  private selectedRestaurant?: RestaurantClass;
  getRestaurants(): RestaurantClass[] {
    return this.restaurants;
  }

  setSelectedRestaurant(rest: RestaurantClass): void {
    this.selectedRestaurant = rest;
  }

  getSelectedRestaurant(): RestaurantClass | undefined {
    return this.selectedRestaurant;
  } 
}
