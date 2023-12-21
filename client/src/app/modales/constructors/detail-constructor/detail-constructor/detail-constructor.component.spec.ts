import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailConstructorComponent } from './detail-constructor.component';

describe('DetailConstructorComponent', () => {
  let component: DetailConstructorComponent;
  let fixture: ComponentFixture<DetailConstructorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailConstructorComponent]
    });
    fixture = TestBed.createComponent(DetailConstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
