import { RouterModule, Routes } from '@angular/router';
import { DepartmentsComponent } from './departments.component';
import { NgModule } from '@angular/core';
import { DepartmentsDetailsComponent } from './departments-details/departments-details.component';

const routes: Routes = [
  { path: '', component: DepartmentsComponent, children: [
    { path: '', redirectTo: 'details', pathMatch: 'full' },
    { path: 'details', component: DepartmentsDetailsComponent }
  ]}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class DepartmentsRoutingModule {}
