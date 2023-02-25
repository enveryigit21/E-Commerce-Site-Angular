import { CartService } from './../../services/cart.service';
import { CardItem } from 'src/app/models/cardItem';

import { Todos } from './../../models/model';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  dataLoaded = false ;
  filterText= "";
products: any;
add: any;
  constructor( private api : ProductService ,
     private toastr: ToastrService ,
     private cartService:CartService){}

  ngOnInit(): void {
  this.getProduct() ;
  }

  productsList:Todos[] = []

  getProduct() {
   this.api.getTodos().subscribe((res:Todos[])=> {
    this.productsList = res ;
    this.dataLoaded = true
   })
  }

  addToCart(product:Todos) {
    this.toastr.success("Ürün sepete eklendi" , product.title)
    this.cartService.addToCart(product)

   }



}
