import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
//test
const routes: Routes = [
  {path:'home',component:HomeComponent}
];
//test
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
//test
export class AppRoutingModule { }
