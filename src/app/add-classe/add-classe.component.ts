import {Component, OnInit} from '@angular/core';
import {Classe} from "../model/classe"
import {ClasseService} from "../services/classe.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-add-classe',
  templateUrl: './add-classe.component.html',
  styleUrls: ['./add-classe.component.css']
})
export class AddClasseComponent implements OnInit {

  classes: Classe[] | undefined;
  classe = new Classe()

  constructor(private classeService: ClasseService) {}

  ngOnInit() {
    this.classeService.getClasses().subscribe((classe) =>
      this.classes = classe
    )
  };

  onSubmit(form: NgForm) {
    if (form.valid) {
      const data = form.value
      this.classeService.createClasse(data).subscribe((classe) => {
        console.log('Classe créée avec succès:', classe);
        form.resetForm();
      })
    }
  }
}
