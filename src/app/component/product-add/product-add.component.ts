import { Todos } from 'src/app/models/model';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/services/product.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit{

  productAddForm : FormGroup ;

  constructor(private formBuilder : FormBuilder , private service : ProductService , private toastrx : ToastrService){}
  ngOnInit(): void {
   this.createProductAddForm();
  }

  createProductAddForm() {
   this.productAddForm = this.formBuilder.group({
    userId: ["" , Validators.required],
    id:["", Validators.required],
    title:["",Validators.required],
    completed:["",Validators.required]
   })
  }


  add(){

    if(this.productAddForm.valid) {
      let productModel= Object.assign({},this.productAddForm.value)
      console.log(productModel)
  }else {
       this.toastrx.error("ürün eklenemedi")
  }
}


}
