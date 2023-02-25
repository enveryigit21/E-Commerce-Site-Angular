import { LoginComponent } from './component/login/login.component';
import { CategoryComponent } from './component/category/category.component';
import { ProductAddComponent } from './component/product-add/product-add.component';
import { ProductComponent } from './component/product/product.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{path:"products/add" , component:ProductAddComponent},
{path:"product" , component:ProductComponent},
{path:"" , component:ProductComponent},
{path:"login", component:LoginComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
