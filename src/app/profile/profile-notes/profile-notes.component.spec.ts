import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileNotesComponent } from './profile-notes.component';

describe('ProfileNotesComponent', () => {
  let component: ProfileNotesComponent;
  let fixture: ComponentFixture<ProfileNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileNotesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
