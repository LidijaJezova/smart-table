import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Resident } from './resident';
import { Observable, of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ResidentService {

  /**
   * URL to web api.
   *
   * @private
   * @memberof ResidentService
   */
  private residentUrl = 'http://localhost:56073/api/resident';

  constructor(private http: HttpClient) { }

  /**
   * Gets all residents from the database.
   *
   * @returns {Observable<Resident[]>}
   * @memberof ResidentService
   */
  getResidents(): Observable<Resident[]> {
    return this.http.get<Resident[]>(this.residentUrl);
  }

  /**
   * Gets resident by ID from the database.
   *
   * @param {number} id
   * @returns {Observable<Resident>}
   * @memberof ResidentService
   */
  getResidentById(id: number): Observable<Resident> {
    return this.http.get<Resident>(`${this.residentUrl}/${id}`);
  }

  /**
   * Removes resident from the server by ID.
   *
   * @param {number} id
   * @returns {Observable<Resident>}
   * @memberof ResidentService
   */
  removeResidentById(id: number): Observable<Resident> {
    return this.http.delete<Resident>(`${this.residentUrl}/${id}`);
  }

  /**
   * Adds new resident to the database.
   *
   * @param {*} resident
   * @returns {Observable<any>}
   * @memberof ResidentService
   */
  addResident(resident: any): Observable<any> {
    return this.http.post<any>(`http://localhost:56073/api/resident/`, resident);
  }

  /**
   * Updates the exact resident with new values.
   *
   * @param {Resident} resident
   * @returns {Observable<Resident>}
   * @memberof ResidentService
   */
  updateResident(resident: Resident): Observable<Resident> {
    return this.http.put<Resident>(`${this.residentUrl}/${resident.id}`, resident);
  }
}
