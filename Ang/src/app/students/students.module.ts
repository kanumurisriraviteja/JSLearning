import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './student/student.component';
import { StudentsRoutingModule } from './students-routing.module';
import { AiComponent } from './ai/ai.component';



@NgModule({
  declarations: [StudentComponent, AiComponent],
  imports: [
    CommonModule,
    StudentsRoutingModule
  ]
})
export class StudentsModule { }
