import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BasicInforCustomerComponent} from "./basic-infor-customer.component";
import {ListComponent} from "./list/list.component";
import {CreateComponent} from "./create/create.component";
import {UpdateComponent} from "./update/update.component";
import {DeleteComponent} from "./delete/delete.component";


const routes: Routes = [{
  path: 'basic_infor', component: BasicInforCustomerComponent, children: [
    {
      path: '', component: ListComponent
    },
    {
      path: 'create', component: CreateComponent
    },
    {
      path: 'update', component: UpdateComponent
    },
    {
      path:'delete',component:DeleteComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicInforCustomerRoutingModule {
}
