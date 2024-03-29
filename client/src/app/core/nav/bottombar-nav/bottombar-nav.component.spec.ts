import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottombarNavComponent } from './bottombar-nav.component';

describe('BottombarNavComponent', () => {
  let component: BottombarNavComponent;
  let fixture: ComponentFixture<BottombarNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottombarNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottombarNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
