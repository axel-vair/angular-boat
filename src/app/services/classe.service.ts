import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Classe} from "../classes/classes.component";

@Injectable({
  providedIn: 'root'
})
export class ClasseService {
  constructor(private http: HttpClient) { }
  url = 'http://localhost:9092/api/classes'; // Remplacez par l'URL de votre API


  createClasse(classeData: any): Observable<any>{
    return this.http.post(this.url, classeData)
  }

  getClasses(): Observable<any> {
    return this.http.get<any>(this.url);
  }

  getClasse(id: number): Observable<Classe>{
    return this.http.get<Classe>(`${this.url}/${id}`);
  }

  deleteClasse(id: number): Observable<Classe>{
    return this.http.delete<Classe>(`${this.url}/${id}`)
  }


}
