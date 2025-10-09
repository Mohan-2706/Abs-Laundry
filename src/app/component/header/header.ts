import { Component } from '@angular/core';
import { User } from '../../service/api/user';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

  userData: any;

  constructor(private callApi: User) { }

  ngOnInit() {
    this.callApi.getUsertoken();
    this.getUserProfile();
  }

  getUserProfile() {
    this.callApi.getProfile().subscribe((res: any) => {
      this.userData = res?.data;
      this.callApi.publish({ name: 'profile', data: this.userData })
    })
  }

  logout() {
    let value = confirm("Are you want to logout this user").valueOf();
    if (!value) return;
    sessionStorage.clear();
    window.location.reload();
  }
}
