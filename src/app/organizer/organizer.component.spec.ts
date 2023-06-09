import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizerComponent } from './organizer.component';

describe('OrganizerComponent', () => {
  let component: OrganizerComponent;
  let fixture: ComponentFixture<OrganizerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrganizerComponent]
    });
    fixture = TestBed.createComponent(OrganizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
