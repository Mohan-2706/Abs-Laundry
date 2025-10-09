import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../service/api/user';

@Component({
  selector: 'app-admin',
  standalone: false,
  templateUrl: './admin.html',
  styleUrl: './admin.css'
})
export class Admin {

  allUser: any[] = [];
  userForm: FormGroup;

  constructor(private callApi: User, private fb: FormBuilder) {
    this.userForm = this.fb.group({
      user_name: [null, Validators.required],
      password: [null, Validators.required]
    })
  }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    this.callApi.getAllUser().subscribe((res: any) => {
      this.allUser = res?.data;
    })
  }

  addNrmlUser() {
    if(!this.userForm.valid) return this.callApi.showInfo("Enter the valid data");
    let value = confirm("Are you want to add this user").valueOf();
    if (!value) return;
    this.callApi.addUser(this.userForm.value).subscribe((res: any) => {
      if (res?.status) {
        this.getAllUsers();
        this.userForm.reset();
        this.callApi.showSuccess(res?.message);
      } else {
        this.callApi.showInfo(res?.message);
      }
    })
  }

  updateUserStatus(data: any, type: string) {
    let value = confirm(type == "Delete" ? "Are you want to delete this user" : data?.isActive ? "Are you want to restrict this user" : "Are you want to activate this user").valueOf();
    if (!value) return;
    let payload = {
      status: type == 'Delete' ? true : data?.isActive ? false : true,
      type: type,  // "Access" , "Delete"
      user_id: data?._id
    }
    this.callApi.updateUser(payload).subscribe((res: any) => {
      if (res?.status) {
        this.getAllUsers();
        this.callApi.showSuccess(res?.message);
      } else {
        this.callApi.showError(res?.message);
      }
    })
  }

}
