import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Deliveryhistory } from './deliveryhistory';

describe('Deliveryhistory', () => {
  let component: Deliveryhistory;
  let fixture: ComponentFixture<Deliveryhistory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Deliveryhistory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Deliveryhistory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
