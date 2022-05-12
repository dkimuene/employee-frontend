import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeformComponent } from './pages/employeeform/employeeform.component';

const routes: Routes = [
  // // {
  // //   path:"",
  // //   component
  // // },
  // {
  //   path:"form",
  //   component:EmployeeformComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
