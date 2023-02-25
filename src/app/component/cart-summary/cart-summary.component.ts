import { ToastrService } from 'ngx-toastr';
import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { CardItem } from 'src/app/models/cardItem';
import { Todos } from 'src/app/models/model';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent  implements OnInit{


  constructor(private cartService: CartService , private toastrService:ToastrService){}
  selectedValue!: string;
  cartItems: CardItem[] = [] ;

  ngOnInit(): void {
  this.getCart();
  }

  getCart() {
    this.cartItems= this.cartService.list();
  }


  removeFormCart(product:Todos){
    this.cartService.removeFormCart(product);
    this.toastrService.error(product.title + "Silindi")


  }

}
