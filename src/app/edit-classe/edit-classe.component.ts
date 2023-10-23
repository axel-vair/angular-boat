import {Component, OnInit} from '@angular/core';
import {ClasseService} from "../services/classe.service";
import {ActivatedRoute} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-edit-classe',
  templateUrl: './edit-classe.component.html',
  styleUrls: ['./edit-classe.component.css']
})
export class EditClasseComponent implements OnInit {
  classeUpdate: any;

  constructor(private classeService: ClasseService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.classeService.getClasse(id).subscribe((classe) => {
      this.classeUpdate = classe;
    })
  }

  onSubmit(form: NgForm){
    if(form.valid){
      const data = form.value
      data.id = this.classeUpdate.id
      this.classeService.updateClasse(data).subscribe((classeUpdated) => {
        form.resetForm();
      })
    }

  }
}
