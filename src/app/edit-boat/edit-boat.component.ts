import {Component, OnInit} from '@angular/core';
import {Boat} from "../model/boat";
import {Classe} from "../model/classe";
import {BoatService} from "../services/boat.service";
import {ClasseService} from "../services/classe.service";
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-edit-boat',
  templateUrl: './edit-boat.component.html',
  styleUrls: ['./edit-boat.component.css']
})
export class EditBoatComponent implements OnInit {
  boatUpdate: any;
  classes: Classe[] = [];

  constructor(private boatService: BoatService,
              private classeService: ClasseService,
              private route: ActivatedRoute,
              private http: HttpClient) {
  }


  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.boatService.getBoat(id).subscribe((boat) => {
      this.boatUpdate = boat;
    })
    this.classeService.getClasses().subscribe((classes) => {
      this.classes = classes
    })
  }

  onSubmit(form: NgForm){
    if(form.valid){
      const data = form.value
      data.id = this.boatUpdate.id
      this.boatService.updateBoat(data).subscribe((boatUpdated) => {
        form.resetForm();
      })
    }
  }


}
