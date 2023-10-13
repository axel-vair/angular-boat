import {Component, OnInit} from '@angular/core';
import {ClasseService} from "../services/classe.service";
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";

export class Classe {
  constructor(public id: Number, public name: String) {
  }
}
@Component({
  selector: 'app-single-classe',
  templateUrl: './single-classe.component.html',
  styleUrls: ['./single-classe.component.css']
})

export class SingleClasseComponent implements OnInit {
  singleClasse: any

  constructor(private classeService: ClasseService,
              private route: ActivatedRoute,
              private http: HttpClient) {
  }

  getSingleClasse(id:any){
    this.http.get<Classe>("http://localhost:9092/api/classes/" + `${id}`).subscribe(
      Classe => {
        this.singleClasse = Classe
      }
    )
  }

  ngOnInit() {
    const id = this.route.snapshot.params['id']
    this.getSingleClasse(id)
  }
}
