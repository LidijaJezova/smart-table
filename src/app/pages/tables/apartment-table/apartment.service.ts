import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Apartment } from './apartment';
import { Observable, of } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class ApartmentService {

  /**
   * URL to web api.
   *
   * @private
   * @memberof ApartmentService
   */
  private apartmentUrl = 'http://localhost:56073/api/apartment';

  constructor(
    private http: HttpClient) { }

  /**
   * Gets all apartments from the database.
   *
   * @returns {Observable<Apartment[]>}
   * @memberof ApartmentService
   */
  getApartments(): Observable<Apartment[]> {
    return this.http.get<Apartment[]>(this.apartmentUrl);
  }

  /**
   * Gets apartment by ID from the database.
   *
   * @param {number} id
   * @returns {Observable<Apartment>}
   * @memberof ApartmentService
   */
  getApartmentById(id: number): Observable<Apartment> {
    return this.http.get<Apartment>(`${this.apartmentUrl}/${id}`);
  }

  /**
   * Updates the exact apartment with new values.
   *
   * @param {Apartment} apartment
   * @returns {Observable<Apartment>}
   * @memberof ApartmentService
   */
  updateApartment(apartment: Apartment): Observable<Apartment> {
    return this.http.put<Apartment>(`${this.apartmentUrl}/${apartment.id}`, apartment);
  }

  /**
   * Removes apartment from the database by ID.
   *
   * @param {number} id
   * @returns {Observable<Apartment>}
   * @memberof ApartmentService
   */
  removeApartmentById(id: number): Observable<Apartment> {
    return this.http.delete<Apartment>(`${this.apartmentUrl}/${id}`);
  }

  /**
   * Adds new apartment to the database.
   *
   * @param {*} apartment
   * @returns {Observable<any>}
   * @memberof ApartmentService
   */
  addApartment(apartment: Apartment): Observable<Apartment> {
    return this.http.post<Apartment>(`http://localhost:56073/api/apartment/`, apartment);
  }
}