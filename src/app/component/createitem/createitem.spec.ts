import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Createitem } from './createitem';

describe('Createitem', () => {
  let component: Createitem;
  let fixture: ComponentFixture<Createitem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Createitem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Createitem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
