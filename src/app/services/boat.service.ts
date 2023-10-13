import {Injectable} from "@angular/core";
import {Boat} from "../model/boat";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BoatService {
  constructor(private http: HttpClient) {}
  url = "http://localhost:9092/api/boats";
  createBoat(boat: Boat){
    return this.http.post(this.url, boat);
  }

  updateBoat(boat: Boat){
    return this.http.put<Boat>(this.url, boat);
  }

  getBoatList(): Observable<any>{
    return this.http.get<any>(this.url);
  }
  getBoat(id: number){
    return this.http.get<Boat>(this.url+"/id");
  }

  deleteBoat(id: number){
    return this.http.delete<Boat>(this.url+"/id");
  }
}
