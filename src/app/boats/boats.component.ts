import {Component, Inject, OnInit} from '@angular/core';
import {BoatService} from "../services/boat.service";
import {Boat} from "../model/boat";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {AddBoatComponent} from "../add-boat/add-boat.component";
import {EditBoatComponent} from "../edit-boat/edit-boat.component";


@Component({
  selector: 'app-boats',
  templateUrl: './boats.component.html',
  styleUrls: ['./boats.component.css']
})

export class BoatsViewComponent implements OnInit {

  // Tableau de type Boat
  boats: Boat[] = [];
  classe: Boat[] | undefined

  // Constructeur de mon composant qui viendra récupérer le HttpClient pour fetch
  constructor(private boatService: BoatService, private matDialog: MatDialog) {
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

  openModal() {
    let dialogRef = this.matDialog.open(AddBoatComponent, {
      width: '600px',
      height: '550px',
    });
    dialogRef.afterClosed().subscribe(result => {
      this.boatService.getBoatList().subscribe((boats) => {
        this.boats = boats;
      })
    });
  }

  openModalEdit(boatId: number) {
    let dialogRef = this.matDialog.open(EditBoatComponent, {
      width: '600px',
      height: '550px',
      data: {id: boatId}
    })

    dialogRef.afterClosed().subscribe((result) => {
      this.boatService.getBoatList().subscribe((boats) => {
        this.boats = boats;
      })
    })

  }
}



