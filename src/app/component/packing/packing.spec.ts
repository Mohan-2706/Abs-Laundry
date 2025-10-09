import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Packing } from './packing';

describe('Packing', () => {
  let component: Packing;
  let fixture: ComponentFixture<Packing>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Packing]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Packing);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
