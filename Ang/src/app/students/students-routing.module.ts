import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AiComponent } from './ai/ai.component';
import { StudentComponent } from './student/student.component';


const routes: Routes =
  [
    {
      path: 'bootstrap', component: StudentComponent  },
    {
      path: 'ai', component: AiComponent  // 'more/:name' only few params
    }
  ];
  
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
