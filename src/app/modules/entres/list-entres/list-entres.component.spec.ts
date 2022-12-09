import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEntresComponent } from './list-entres.component';

describe('ListEntresComponent', () => {
  let component: ListEntresComponent;
  let fixture: ComponentFixture<ListEntresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEntresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEntresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
