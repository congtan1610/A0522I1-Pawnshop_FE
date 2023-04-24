import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CategoryModule} from "./category.module";
import {ListComponent} from "./list/list.component";
import {CreateComponent} from "./create/create.component";
import {UpdateComponent} from "./update/update.component";
import {DeleteComponent} from "./delete/delete.component";


const routes: Routes = [{
  path: 'category', component: CategoryModule, children: [
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
export class CategoryRoutingModule {
}
