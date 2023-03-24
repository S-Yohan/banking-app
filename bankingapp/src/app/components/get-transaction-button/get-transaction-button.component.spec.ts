import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetTransactionButtonComponent } from './get-transaction-button.component';

describe('GetTransactionButtonComponent', () => {
  let component: GetTransactionButtonComponent;
  let fixture: ComponentFixture<GetTransactionButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetTransactionButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetTransactionButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
