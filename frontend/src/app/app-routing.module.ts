import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductComponent } from './components/product/product.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductCreateComponent } from './components/product-create/product-create.component';

const routes: Routes = [
  {path:'products',component:ProductComponent},
  {
    path:'products',
    children:[
      {path:'show/:id',component:ProductListComponent},
      {path:'edit/:id',component:ProductEditComponent}
    ]
  },
  {path:'products/create',component:ProductCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
