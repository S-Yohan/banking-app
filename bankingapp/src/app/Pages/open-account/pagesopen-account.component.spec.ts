import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesopenAccountComponent } from './pagesopen-account.component';

describe('PagesopenAccountComponent', () => {
  let component: PagesopenAccountComponent;
  let fixture: ComponentFixture<PagesopenAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesopenAccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagesopenAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
