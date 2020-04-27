import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';


const routes: Routes = [
 { path: "" , component : HomeComponent},
 {
   path: "customers",
   loadChildren: () => import('../app/component/customers/customers.module').then(m => m.CustomersModule)

 }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
