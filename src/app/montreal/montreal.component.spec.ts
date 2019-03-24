import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MontrealComponent } from './montreal.component';

describe('MontrealComponent', () => {
  let component: MontrealComponent;
  let fixture: ComponentFixture<MontrealComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MontrealComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MontrealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
