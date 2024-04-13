import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileChecklistsComponent } from './profile-checklists.component';

describe('ProfileChecklistsComponent', () => {
  let component: ProfileChecklistsComponent;
  let fixture: ComponentFixture<ProfileChecklistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileChecklistsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileChecklistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
