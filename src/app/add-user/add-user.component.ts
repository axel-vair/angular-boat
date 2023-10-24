import {Component, OnInit} from '@angular/core';
import {User} from "../model/user";
import {UserService} from "../services/user.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit{

  users: User[] | undefined;
  user = new User();

  constructor(private userService: UserService) {}

  ngOnInit() {

  }

  onSubmit(form: NgForm){
    if(form.valid){
      const data = form.value;
      this.userService.createUser(data).subscribe((user) => {
        form.resetForm();
      })
    }
  }
}
