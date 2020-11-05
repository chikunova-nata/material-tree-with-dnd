import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DepartmentDataModel } from '../models/department-data.model';

@Injectable({providedIn: 'root'})
export class DynamicDataSourceService {

  constructor(private http: HttpClient) {}

  getJSON(): Observable<DepartmentDataModel> {
    return this.http.get('./assets/departments/data.json');
  }
}
