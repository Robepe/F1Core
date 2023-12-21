import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddConstructorComponent } from './add-constructor.component';

describe('AddConstructorComponent', () => {
  let component: AddConstructorComponent;
  let fixture: ComponentFixture<AddConstructorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddConstructorComponent]
    });
    fixture = TestBed.createComponent(AddConstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
