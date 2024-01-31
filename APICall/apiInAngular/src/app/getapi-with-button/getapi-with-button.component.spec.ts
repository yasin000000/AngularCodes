import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetapiWithButtonComponent } from './getapi-with-button.component';

describe('GetapiWithButtonComponent', () => {
  let component: GetapiWithButtonComponent;
  let fixture: ComponentFixture<GetapiWithButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetapiWithButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetapiWithButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
