import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Createexpence } from './createexpence';

describe('Createexpence', () => {
  let component: Createexpence;
  let fixture: ComponentFixture<Createexpence>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Createexpence]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Createexpence);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
