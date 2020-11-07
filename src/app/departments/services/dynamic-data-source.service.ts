import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DepartmentDataModel } from '../models/department-data.model';

@Injectable({providedIn: 'root'})
export class DynamicDataSourceService {
  API_URL = '/assets/departments/data.json';

  constructor(private http: HttpClient) {}

  getJSON(): Observable<DepartmentDataModel> {
    return this.http.get(this.API_URL);
  }
}
