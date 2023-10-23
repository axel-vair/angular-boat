import { Injectable } from "@angular/core";
import { Boat } from "../model/boat";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BoatService {
  constructor(private http: HttpClient) { }
  url = "http://localhost:9092/api/boats";


  createBoat(boatData: any): Observable<any> {
    return this.http.post(this.url, boatData);
  }

  updateBoat(boat: Boat): Observable<Boat> {
    return this.http.put<Boat>(`${this.url}/${boat.id}`, boat);
  }

  getBoatList(): Observable<any> {
    return this.http.get<any>(this.url);
  }

  getBoat(id: number): Observable<Boat> {
    return this.http.get<Boat>(`${this.url}/${id}`);
  }

  deleteBoat(id: number): Observable<Boat> {
    return this.http.delete<Boat>(`${this.url}/${id}`);
  }
}
