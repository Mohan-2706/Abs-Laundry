import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Customerrecord } from './customerrecord';

describe('Customerrecord', () => {
  let component: Customerrecord;
  let fixture: ComponentFixture<Customerrecord>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Customerrecord]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Customerrecord);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
