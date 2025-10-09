import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Deliveryrecord } from './deliveryrecord';

describe('Deliveryrecord', () => {
  let component: Deliveryrecord;
  let fixture: ComponentFixture<Deliveryrecord>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Deliveryrecord]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Deliveryrecord);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
