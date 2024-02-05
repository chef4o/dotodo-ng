import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopbarNavComponent } from './topbar-nav.component';

describe('TopbarNavComponent', () => {
  let component: TopbarNavComponent;
  let fixture: ComponentFixture<TopbarNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopbarNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopbarNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
