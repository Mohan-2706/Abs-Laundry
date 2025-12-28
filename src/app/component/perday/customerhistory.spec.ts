import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Customerhistory } from './customerhistory';

describe('Customerhistory', () => {
  let component: Customerhistory;
  let fixture: ComponentFixture<Customerhistory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Customerhistory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Customerhistory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
