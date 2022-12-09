import { ListEntresComponent } from './../../entres/list-entres/list-entres.component';
import { ProductEntresComponent } from './product-entres.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';


describe('ListEntresComponent', () => {
  let component: ProductEntresComponent;
  let fixture: ComponentFixture<ProductEntresComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductEntresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductEntresComponent);

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
