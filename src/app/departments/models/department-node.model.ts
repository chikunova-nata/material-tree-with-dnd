export interface DepartmentNodeModel {
  name: string;
  employees?: DepartmentNodeModel[];
}
