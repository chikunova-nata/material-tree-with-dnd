export interface DepartmentNodeModel {
  name: string;
  employees: Employee[];
  departments?: DepartmentNodeModel;
}

export interface Employee {
  firstName: string;
  lastName: string;
  birthDate: string;
  speciality: string;
}
