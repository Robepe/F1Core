import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailDriverComponent } from './detail-driver.component';

describe('DetailDriverComponent', () => {
  let component: DetailDriverComponent;
  let fixture: ComponentFixture<DetailDriverComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailDriverComponent]
    });
    fixture = TestBed.createComponent(DetailDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
