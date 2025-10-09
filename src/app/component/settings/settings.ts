import { Component } from '@angular/core';
import { User } from '../../service/api/user';

@Component({
  selector: 'app-settings',
  standalone: false,
  templateUrl: './settings.html',
  styleUrl: './settings.css'
})
export class Settings {
  
  userData: any;

  constructor(private callApi: User){
    this.callApi.subscribe().subscribe((res:any)=>{
      if(res?.name == 'profile'){
        this.userData = res?.data;
        console.log("this.userData",this.userData);
        
      }
    })
  }

}
