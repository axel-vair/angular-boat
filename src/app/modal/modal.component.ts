import {Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AddBoatComponent} from "../add-boat/add-boat.component";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  constructor(private dialogRef: MatDialog) {}
  openDialog(){
    this.dialogRef.open(AddBoatComponent)
  }

}
