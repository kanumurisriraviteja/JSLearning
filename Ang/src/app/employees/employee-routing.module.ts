import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateEmloyeeComponent } from './create-emloyee/create-emloyee.component';
import { MoreEmployeeDetailsComponent } from './more-employee-details/more-employee-details.component';
import { CanDeactiveCreateEmployeeGuard } from './can-deactive-create-employee.guard';

const routes: Routes =
  [
    {
      path: 'create', component: CreateEmloyeeComponent, canDeactivate :[CanDeactiveCreateEmployeeGuard]
    },
    {
      path: 'more', component: MoreEmployeeDetailsComponent  // 'more/:name' only few params
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
