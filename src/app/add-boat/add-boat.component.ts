import {Component, OnInit} from '@angular/core';
import {BoatService} from "../services/boat.service";
import {Boat} from "../model/boat";
import {NgForm} from "@angular/forms";
import {Classe} from "../classes/classes.component";
import {ClasseService} from "../services/classe.service";

@Component({
  selector: 'app-add-boat',
  templateUrl: './add-boat.component.html',
  styleUrls: ['./add-boat.component.css']
})
export class AddBoatComponent implements OnInit{

  boats: Boat[] | undefined;
  boat = new Boat();
  classes: Classe[] = [];
  constructor(private boatService: BoatService, private classeService: ClasseService) {}

  ngOnInit() {
    this.boatService.getBoatList().subscribe((boat) =>
     this.boats = boat
    )
    this.classeService.getClasses().subscribe(classes => {
      this.classes = classes
    })
  }

  onSubmit(form: NgForm){
    if (form.valid){
      const data = form.value
      this.boatService.createBoat(data).subscribe((response) => {
        console.log('Bateau créé avec succès:', response);
        form.resetForm();
      })
    }
  }
}
