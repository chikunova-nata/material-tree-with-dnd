import { RouterModule, Routes } from '@angular/router';
import { DepartmentsComponent } from './departments/departments.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: 'departments', component: DepartmentsComponent },
  { path: '',   redirectTo: '/departments', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
