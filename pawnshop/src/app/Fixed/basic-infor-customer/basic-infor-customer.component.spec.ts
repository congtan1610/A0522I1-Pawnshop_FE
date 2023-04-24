import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicInforCustomerComponent } from './basic-infor-customer.component';

describe('BasicInforCustomerComponent', () => {
  let component: BasicInforCustomerComponent;
  let fixture: ComponentFixture<BasicInforCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicInforCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicInforCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
