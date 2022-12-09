import { Router } from '@angular/router';
import { RoleModel } from './../../models/role.model';
import { UserModel } from './../../models/user.model';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent implements OnInit {
  UserModel: UserModel = {
email:'',
username:'',
password:'',
roles:[]
  };
  role=''
  userform: FormGroup = this.formBuilder.group({
    email: [
      this.UserModel.email,
      Validators.compose([
        Validators.required,
        Validators.email
      ]),
    ],
    username: [
      this.UserModel.username,
      Validators.compose([
        Validators.required
      ]),
    ],
    roles: [
      this.role,
      Validators.compose([
        Validators.required,
      ])
    ]
    ,
    password: [
      this.UserModel.password,
      Validators.compose([
        Validators.required
      ])
    ]
  });

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.userform = this.formBuilder.group({
      email: [
        this.UserModel.email,
        Validators.compose([
          Validators.required,
          Validators.email
        ]),
      ],
      username: [
        this.UserModel.username,
        Validators.compose([
          Validators.required,
        ]),
      ],
      password: [
        this.UserModel.username,
        Validators.compose([
          Validators.required,
        ]),
      ],
      roles: [
        this.role,
        Validators.compose([
          Validators.required,
        ])
      ]
    });
  }
  submit($event: any) {
    console.log(this.userform);
    console.log(this.UserModel);
    this.UserModel.roles=[this.role];
    this.authService.register({
      "username":this.UserModel.username,
      "email":this.UserModel.email,
      "password":this.UserModel.password
    },this.role)
    // .subscribe((user) => {
    //   console.log(user);
      this.router.navigate(['/auth',"users","lists"]);
    // });
  }


}
