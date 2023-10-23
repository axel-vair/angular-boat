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
  boats: Boat[] = [];
  classe: Boat[] | undefined

  // Constructeur de mon composant qui viendra récupérer le HttpClient pour fetch
  constructor(private boatService: BoatService) {
  }

  deleteBoat(id?: number) {
    if (id) {
      this.boatService.deleteBoat(id).subscribe((deletedBoat) => {
          this.boats = this.boats.filter(boat => boat.id !== id);
        },
        (error) => {
          console.error('Failed to delete the boat:', error);
        }
      );
    } else {
      console.error('Invalid boat ID');
    }
  }

  ngOnInit() {
    this.boatService.getBoatList().subscribe((boats) => {
      this.boats = boats
    });
  }
}

