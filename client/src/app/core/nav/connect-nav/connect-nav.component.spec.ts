import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectNavComponent } from './connect-nav.component';

describe('ConnectNavComponent', () => {
  let component: ConnectNavComponent;
  let fixture: ComponentFixture<ConnectNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConnectNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
