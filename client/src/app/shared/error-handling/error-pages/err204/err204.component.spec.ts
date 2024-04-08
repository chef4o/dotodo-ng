import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Err204Component } from './err204.component';

describe('Err204Component', () => {
  let component: Err204Component;
  let fixture: ComponentFixture<Err204Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Err204Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Err204Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
