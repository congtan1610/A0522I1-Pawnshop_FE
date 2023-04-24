import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BasicInforCustomerRoutingModule} from './basic-infor-customer-routing.module';
import {CreateComponent} from './create/create.component';
import {BasicInforCustomerComponent} from './basic-infor-customer.component';
import {ListComponent} from './list/list.component';
import {UpdateComponent} from './update/update.component';
import {DeleteComponent} from './delete/delete.component';


@NgModule({
  declarations: [CreateComponent, BasicInforCustomerComponent, ListComponent, UpdateComponent, DeleteComponent],
  imports: [
    CommonModule,
    BasicInforCustomerRoutingModule
  ]
})
export class BasicInforCustomerModule {
}
