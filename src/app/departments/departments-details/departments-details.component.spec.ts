import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentsDetailsComponent } from './details.component';

describe('DetailsComponent', () => {
  let component: DepartmentsDetailsComponent;
  let fixture: ComponentFixture<DepartmentsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
