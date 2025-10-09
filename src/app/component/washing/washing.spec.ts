import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Washing } from './washing';

describe('Washing', () => {
  let component: Washing;
  let fixture: ComponentFixture<Washing>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Washing]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Washing);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
