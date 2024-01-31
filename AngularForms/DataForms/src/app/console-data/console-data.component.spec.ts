import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsoleDataComponent } from './console-data.component';

describe('ConsoleDataComponent', () => {
  let component: ConsoleDataComponent;
  let fixture: ComponentFixture<ConsoleDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsoleDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsoleDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
