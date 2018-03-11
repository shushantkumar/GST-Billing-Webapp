import { Component, OnInit } from '@angular/core';
import {ToolbarModule} from 'primeng/toolbar';  
import * as $ from 'jquery';
import {ProductentryService} from './productentry.service';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { HttpModule } from '@angular/http'; 
import {Router} from "@angular/router";

@Component({
  selector: 'app-productentry',
  templateUrl: './productentry.component.html',
  styleUrls: ['./productentry.component.scss']
})
export class ProductentryComponent implements OnInit {

  product_code:String;
  product_name:String;
  product_price:Number;
  product_gst:Number;

  allentries;

  constructor(
    private productentryService:ProductentryService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getAllProducts();
    (<HTMLInputElement> document.getElementById("update")).disabled = true;
  } 
  
  getAllProducts(){
    this.productentryService.getAllProducts().subscribe(
      (res) =>{
          console.log(res[0]);
          let response = res[0];
          this.allentries = response;
      
        }, 
      (err) => console.log(err),
      () => console.log('done!')
  );

  }

  postNewProduct(event){
    event.preventDefault();
    let product_code = this.product_code;
    let product_name = this.product_name;
    let product_price = this.product_price;
    let product_gst = this.product_gst;

    let data={
      "product_code":product_code,
      "product_name":product_name,
      "product_price":product_price,
      "product_gst":product_gst
    }
    console.log(data);
    this.productentryService.postNewProduct(data).subscribe(response=> {
      console.log(response);
      let res = response;
      console.log("added");
    }); 

    this.product_code = "";
    this.product_name = "";
    this.product_price = 0;
    this.product_gst = 0;

    this.getAllProducts();

  }

  updateProduct(event){
    event.preventDefault();
    let product_code = this.product_code;
    let product_name = this.product_name;
    let product_price = this.product_price;
    let product_gst = this.product_gst;

    let data={
      "product_name":product_name,
      "product_price":product_price,
      "product_gst":product_gst
    }
    console.log(data);
    this.productentryService.updateProduct(data,product_code).subscribe(response=> {
      console.log(response);
      let res = response;
      console.log("updated");
    }); 
    this.getAllProducts();
    this.product_code = "";
    this.product_name = "";
    this.product_price = 0;
    this.product_gst = 0;

    
    (<HTMLInputElement> document.getElementById("save")).disabled = false;
    (<HTMLInputElement> document.getElementById("update")).disabled = true;
    (<HTMLInputElement> document.getElementById("product_code")).disabled = false;
    this.getAllProducts();
  }

  deleteProduct(meta){
    let product_code=meta.product_code;
    this.productentryService.deleteProduct(product_code).subscribe(response=> {
      console.log(response);
      let res = response;
      console.log("deleted");
      
    }); 
    this.getAllProducts();
  }

  editProduct(meta){
    console.log(meta);
    (<HTMLInputElement> document.getElementById("update")).disabled = false;
    this.product_code = meta.product_code;
    this.product_name = meta.product_name;
    this.product_price = meta.product_price;
    this.product_gst = meta.product_gst;
    (<HTMLInputElement> document.getElementById("save")).disabled = true;
    (<HTMLInputElement> document.getElementById("product_code")).disabled = true;


  }

  goBilling(){
    this.router.navigate(['billing']);
  }


}
