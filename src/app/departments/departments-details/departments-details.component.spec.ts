import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DepartmentsDetailsComponent } from './departments-details.component';
import { DragDropModule } from '@angular/cdk/drag-drop';


describe('DetailsComponent', () => {
  let component: DepartmentsDetailsComponent;
  let fixture: ComponentFixture<DepartmentsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentsDetailsComponent ],
      imports: [ DragDropModule ]
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

  it('should show employees list', () => {
    component.employees = [
      {
        firstName: 'Leanne',
        lastName: 'Graham',
        birthDate: '01/12/1990',
        speciality: 'economist'
      }];
    fixture.detectChanges();
    const employeesNodes = fixture.nativeElement.querySelector('#employees').children;
    const employee = component.employees[0];
    expect(employeesNodes[0].textContent).toEqual(employee.firstName);
    expect(employeesNodes[1].textContent).toEqual(employee.lastName);
    expect(employeesNodes[2].textContent).toEqual(employee.birthDate);
    expect(employeesNodes[3].textContent).toEqual(employee.speciality);
  });
});
