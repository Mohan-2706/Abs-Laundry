import { Component } from '@angular/core';
import { User } from '../../service/api/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-createitem',
  standalone: false,
  templateUrl: './createitem.html',
  styleUrl: './createitem.css'
})
export class Createitem {

  items: any[]= [];
  itemId: any = null;
  itemForm: FormGroup;

  constructor(private callApi: User, private fb: FormBuilder) {
    this.itemForm = this.fb.group({
      item: [null, Validators.required],
      amount: [null, Validators.required]
    })
  }

  ngOnInit() {
    this.getAllItems();
  }

  getAllItems() {
    this.callApi.getAllItems().subscribe((res: any) => {
      this.items = res?.data;
    })
  }

  editItem(data: any) {
    this.itemId = data?._id;
    this.itemForm.patchValue({ item: data?.item, amount: data?.amount });
  }

  itemAlteration(type: string) {
    if(!this.itemForm.valid && type != 'delete') return this.callApi.showInfo("Enter the valid data");
    let value = confirm("Are you want to update this data").valueOf();
    if(!value) return;
    let payload = {
      ...this.itemForm.value
    }
    if (type != "add") {
      payload.itemId = this.itemId;
      type == 'delete' ? payload.isDeleted = true : '';
    }
    this.callApi.addAndUpdateItem(payload).subscribe((res: any) => {
      if (res?.status) {
        this.getAllItems();
        this.itemForm.reset();
        this.itemId = null;
      } else {
        this.callApi.showError(res?.message);
      }
    })
  }

}
