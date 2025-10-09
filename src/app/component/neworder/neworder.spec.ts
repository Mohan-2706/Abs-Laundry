import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Neworder } from './neworder';

describe('Neworder', () => {
  let component: Neworder;
  let fixture: ComponentFixture<Neworder>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Neworder]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Neworder);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
