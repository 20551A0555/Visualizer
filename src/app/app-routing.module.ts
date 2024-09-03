import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { TableComponent } from './table/table.component';
import { PiechartComponent } from './piechart/piechart.component';

const routes: Routes = [
  {path:'',component:WelcomeComponent},
  {path:'table',component:TableComponent},
  {path:'piechart',component:PiechartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
