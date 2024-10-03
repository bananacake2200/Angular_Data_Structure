import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentlistComponent } from './Components/studentlist/studentlist.component';

const routes: Routes = [ 
  {path: "studentlist", component: StudentlistComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
