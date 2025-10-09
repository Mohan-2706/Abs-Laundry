import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Savepannel } from './savepannel';

describe('Savepannel', () => {
  let component: Savepannel;
  let fixture: ComponentFixture<Savepannel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Savepannel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Savepannel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
