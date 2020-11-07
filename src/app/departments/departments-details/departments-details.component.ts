import { Component, Input } from '@angular/core';
import { Employee } from '../models/department-node.model';

@Component({
  selector: 'app-departments-details',
  templateUrl: './departments-details.component.html',
  styleUrls: ['../departments.component.scss']
})
export class DepartmentsDetailsComponent{
  @Input() employees: Employee[] = [];
}
