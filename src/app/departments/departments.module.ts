import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentsComponent } from './departments.component';
import { DepartmentsRoutingModule } from './departments-routing.module';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { CdkTreeModule } from '@angular/cdk/tree';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { HttpClientModule } from '@angular/common/http';
import { DepartmentsDetailsComponent } from './departments-details/departments-details.component';

@NgModule({
  declarations: [
    DepartmentsComponent,
    DepartmentsDetailsComponent
  ],
  imports: [
    CommonModule,
    DepartmentsRoutingModule,
    HttpClientModule,
    MatTreeModule,
    MatIconModule,
    MatProgressBarModule,
    MatButtonModule,
    CdkTreeModule,
    DragDropModule
  ],
})
export class DepartmentsModule { }
