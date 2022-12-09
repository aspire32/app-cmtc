import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSortiesComponent } from './list-sorties.component';

describe('ListSortiesComponent', () => {
  let component: ListSortiesComponent;
  let fixture: ComponentFixture<ListSortiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSortiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSortiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
