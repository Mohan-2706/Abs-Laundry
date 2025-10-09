import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ironing } from './ironing';

describe('Ironing', () => {
  let component: Ironing;
  let fixture: ComponentFixture<Ironing>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ironing]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ironing);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
