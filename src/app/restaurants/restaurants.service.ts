import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { RestaurantClass } from './restaurants-list/model/restaurantClass';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RestaurantsService {
  private apiUrl = `${environment.backendURL}${environment.api.restaurants}/get`;
  private selectedRestaurant?: RestaurantClass;

  constructor(private http: HttpClient) {}

  getRestaurants(): Observable<RestaurantClass[]> {
    const headers = {
      'ngrok-skip-browser-warning': 'true',
    };

    return this.http.get(this.apiUrl, { headers, responseType: 'text' }).pipe(
      map((res) => {
        try {
          const response = JSON.parse(res);
          if (!Array.isArray(response)) {
            console.error('Expected array but got:', typeof response);
            return [];
          }
          return response.map((r: any) => ({
            id: r.restId,
            name: r.name,
            address: r.address,
            cuisine: r.cuisine,
            openTime: r.openTime,
            closeTime: r.closeTime,
            numberOfTables: r.noOfTables,
          }));
        } catch (e) {
          console.error('JSON parsing error:', e);
          return [];
        }
      }),
      catchError((error) => {
        console.error('HTTP request failed:', error);
        return of([]);
      })
    );
  }

  setSelectedRestaurant(rest: RestaurantClass): void {
    this.selectedRestaurant = rest;
  }

  getSelectedRestaurant(): RestaurantClass | undefined {
    return this.selectedRestaurant;
  }
}
