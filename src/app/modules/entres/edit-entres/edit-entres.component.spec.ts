import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEntresComponent } from './edit-entres.component';

describe('EditEntresComponent', () => {
  let component: EditEntresComponent;
  let fixture: ComponentFixture<EditEntresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEntresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEntresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
