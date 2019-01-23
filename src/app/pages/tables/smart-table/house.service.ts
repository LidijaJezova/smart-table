import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { House } from './house';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class HouseService {

  /**
   * URL to the web api.
   *
   * @private
   * @memberof HouseService
   */
  private housesUrl = 'http://localhost:56073/api/house';

  constructor(
    private http: HttpClient) { }

  /**
   * Gets houses from the database.
   *
   * @returns {Observable<House[]>}
   * @memberof HouseService
   */
  getHouses(): Observable<House[]> {
    return this.http.get<House[]>(this.housesUrl);
  }

  /**
   * Gets house by ID from the database.
   *
   * @param {number} id
   * @returns {Observable<House>}
   * @memberof HouseService
   */
  getHouseById(id: number): Observable<House> {
    return this.http.get<House>(`${this.housesUrl}/${id}`);
  }

  /**
   * Updates the exact house with new values.
   *
   * @param {House} house 
   * @param {*} id 
   * @returns {Observable<House>} 
   * @memberof HouseService
   */
  updateHouse(house: House): Observable<House> {
    
    return this.http.put<House>(`${this.housesUrl}/${house.id}`, house);
  }

  /**
   * Removes house from the database by ID.
   *
   * @param {number} id
   * @returns {Observable<House>}
   * @memberof HouseService
   */
  removeHouseById(id: number): Observable<House> {
    return this.http.delete<House>(`${this.housesUrl}/${id}`);
  }

  /**
   * Adds new house to the database.
   *
   * @param {*} house
   * @returns {Observable<any>}
   * @memberof HouseService
   */
  addHouse(house: House): Observable<House> {
    return this.http.post<House>(`http://localhost:56073/api/house/`, house);
  }
}
