import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractTypeRoutingModule } from './contract-type-routing.module';
import { ContractTypeComponent } from './contract-type.component';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';


@NgModule({
  declarations: [ContractTypeComponent, CreateComponent, ListComponent, UpdateComponent, DeleteComponent],
  imports: [
    CommonModule,
    ContractTypeRoutingModule
  ]
})
export class ContractTypeModule { }
