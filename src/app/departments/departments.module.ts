import { NgModule } from '@angular/core';
import { DepartmentsComponent } from './departments.component';
import { DepartmentsRoutingModule } from './departments-routing.module';

@NgModule({
  declarations: [
    DepartmentsComponent
  ],
  imports: [
    DepartmentsRoutingModule
  ],
})
export class DepartmentsModule { }
