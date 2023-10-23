import {Component, OnInit} from '@angular/core';
import {BoatService } from "../services/boat.service";
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Boat} from "../model/boat";

@Component({
  selector: 'app-single-boat',
  templateUrl: './single-boat.component.html',
  styleUrls: ['./single-boat.component.css']
})
export class SingleBoatComponent implements OnInit {
  singleBoat: any

  constructor(private boatService: BoatService,
              private route: ActivatedRoute,
              private http: HttpClient) {
  }

  getSingleBoat(id: any) {
    this.http.get<Boat>("http://localhost:9092/api/boats/" + `${id}`).subscribe(
      Boat => {
        this.singleBoat = Boat
      }
    )
  }

  ngOnInit() {
    const id = this.route.snapshot.params['id']
    this.getSingleBoat(id)
  }
}
