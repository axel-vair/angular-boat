import {Component, OnInit} from '@angular/core';
import {BoatService} from "../services/boat.service";
import {Boat} from "../model/boat";

@Component({
  selector: 'app-boats',
  templateUrl: './boats.component.html',
  styleUrls: ['./boats.component.css']
})

export class BoatsViewComponent implements OnInit{

  // Tableau de type Boat
  boats: Boat[] | undefined;
  classe: Boat[] | undefined

  // Constructeur de mon composant qui viendra récupérer le HttpClient pour fetch
  constructor(private boatService: BoatService) {
  }

  // Appel de ma fonction getBoats dans on OnInit.
  ngOnInit() {
    this.boatService.getBoatList().subscribe((boats) => {
      this.boats = boats
    });
  }
}

