import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateapiComponent } from './updateapi.component';

describe('UpdateapiComponent', () => {
  let component: UpdateapiComponent;
  let fixture: ComponentFixture<UpdateapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateapiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
