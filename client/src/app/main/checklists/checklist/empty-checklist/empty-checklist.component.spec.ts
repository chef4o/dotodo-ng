import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyChecklistComponent } from './empty-checklist.component';

describe('EmptyChecklistComponent', () => {
  let component: EmptyChecklistComponent;
  let fixture: ComponentFixture<EmptyChecklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmptyChecklistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmptyChecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
