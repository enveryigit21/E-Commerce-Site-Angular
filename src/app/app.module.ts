import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductComponent } from './component/product/product.component';
import { NaviComponent } from './component/navi/navi.component';
import { CategoryComponent } from './component/category/category.component';
import { HttpClientModule } from '@angular/common/http';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { CommonModule } from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import { ToastrModule } from 'ngx-toastr';
import { CartSummaryComponent } from './component/cart-summary/cart-summary.component';
import {MatMenuModule} from '@angular/material/menu';
import { ProductAddComponent } from './component/product-add/product-add.component';
import { LoginComponent } from './component/login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    NaviComponent,
    CategoryComponent,
    VatAddedPipe,
    FilterPipePipe,
    CartSummaryComponent,
    ProductAddComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,HttpClientModule,FormsModule,MatSelectModule,MatMenuModule,ReactiveFormsModule

    ,CommonModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-left"
    })


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
