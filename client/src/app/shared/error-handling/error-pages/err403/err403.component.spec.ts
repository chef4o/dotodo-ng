import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Err403Component } from './err403.component';

describe('Err403Component', () => {
  let component: Err403Component;
  let fixture: ComponentFixture<Err403Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Err403Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Err403Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
