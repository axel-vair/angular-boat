import {Component, OnInit} from '@angular/core';
import {BoatService} from "../services/boat.service";
import {Boat} from "../model/boat";

@Component({
  selector: 'app-add-boat',
  templateUrl: './add-boat.component.html',
  styleUrls: ['./add-boat.component.css']
})
export class AddBoatComponent implements OnInit{

  boats: Boat[] | undefined;
  boat = new Boat();
  constructor(private boatService: BoatService) {
  }

  ngOnInit() {
    this.boatService.getBoatList().subscribe((boat) =>
      this.boats = boat)
    this.saveBoat()
  }

  saveBoat(){
    this.boatService.createBoat(this.boat).subscribe((boat) =>
    {
      this.boat = new Boat()
      console.log(boat)})
  }
}
