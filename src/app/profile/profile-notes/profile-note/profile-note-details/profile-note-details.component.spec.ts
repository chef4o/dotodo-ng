import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileNoteDetailsComponent } from './profile-note-details.component';

describe('ProfileNoteDetailsComponent', () => {
  let component: ProfileNoteDetailsComponent;
  let fixture: ComponentFixture<ProfileNoteDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileNoteDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileNoteDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
