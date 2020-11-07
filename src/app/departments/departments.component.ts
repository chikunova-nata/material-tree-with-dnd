import { Component, OnInit } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { DepartmentNodeModel } from './models/department-node.model';
import { DynamicDataSourceService } from './services/dynamic-data-source.service';
import { DepartmentDataModel } from './models/department-data.model';
import { CdkDragDrop } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {
  treeControl = new NestedTreeControl<any>(node => node.departments);
  dataSource = new MatTreeNestedDataSource<DepartmentNodeModel>();

  constructor(private dynamicDataSourceService: DynamicDataSourceService) {
  }

  ngOnInit(): void {
    this.dynamicDataSourceService.getJSON().subscribe((data: DepartmentDataModel) => {
      this.dataSource.data = data.departments;
    });
  }

  hasChild = (_: number, node: DepartmentNodeModel): boolean => !!node.employees && node.employees.length > 0;

}
