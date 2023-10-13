import { Component, OnInit } from '@angular/core';
import {ClasseService} from "../services/classe.service";
import {HttpClient} from "@angular/common/http";

export class Classe {
  constructor(public name: String, public id: Number) {
  }
}

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})

export class ClassesViewComponent implements OnInit {

  wordings: Classe[] | undefined

  constructor(private classeService: ClasseService, private http: HttpClient) {
  }


  getClass(){
    this.http.get<any>('http://localhost:9092/api/classes').subscribe(
      response => {
        this.wordings = response;
      }
    )
  }
  ngOnInit(){
    this.getClass()
  }
}
