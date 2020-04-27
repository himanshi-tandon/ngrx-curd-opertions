import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { StoreModule} from '@ngrx/store';
import { customerReducer } from "D:/ngrxcurdopertions/src/app/stores/states/customer.reducer";
import { EffectsModule } from '@ngrx/effects';
import { CustomerEffect } from 'src/app/stores/customer.effect';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
const customerRoutes: Routes =[{path: '', component: CustomerComponent}]

@NgModule({
  declarations: [CustomerComponent, CustomerAddComponent, CustomerEditComponent, CustomerListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(customerRoutes),
    StoreModule.forFeature("customers", customerReducer),
    EffectsModule.forFeature([CustomerEffect])
  ]
})
export class CustomersModule { }
