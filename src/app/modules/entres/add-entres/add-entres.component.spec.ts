import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEntresComponent } from './add-entres.component';

describe('AddEntresComponent', () => {
  let component: AddEntresComponent;
  let fixture: ComponentFixture<AddEntresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEntresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEntresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
