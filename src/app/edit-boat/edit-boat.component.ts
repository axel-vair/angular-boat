import {Component, Inject, OnInit} from '@angular/core';
import {Classe} from "../model/classe";
import {BoatService} from "../services/boat.service";
import {ClasseService} from "../services/classe.service";
import {NgForm} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { Router } from '@angular/router';



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
              @Inject(MAT_DIALOG_DATA) public data: any,
              private router: Router,
              public dialogRef: MatDialogRef<EditBoatComponent>

  ) {


  }

  ngOnInit() {
    const id = this.data.id
    this.boatService.getBoat(id).subscribe((boat) => {
      this.boatUpdate = boat;
    })
    this.classeService.getClasses().subscribe((classes) => {
      this.classes = classes
    })
  }

  returnToList() {
    this.dialogRef.close();
    this.router.navigate(['/boats']);
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      const data = form.value
      data.id = this.boatUpdate.id
      this.boatService.updateBoat(data).subscribe((boatUpdated) => {
        form.resetForm();
      })
    }
  }
}
