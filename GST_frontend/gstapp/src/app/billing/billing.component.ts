import { Component, OnInit } from '@angular/core';
import {ProductentryService} from '../productentry/productentry.service';
import { Subject } from 'rxjs/Subject';
import * as $ from 'jquery';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit {
  allentries;
  selectProducts={
    prods:[]
  };
  hundred:number=100;
  grossTotal:number=0;
  

  constructor(
    private productentryService:ProductentryService,
  ) { }

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts(){
    this.productentryService.getAllProducts().subscribe(
      (res) =>{

          let response = res[0];
          this.allentries = response;
          console.log(response);
        }, 
      (err) => console.log(err),
      () => console.log('done!')
  );

  }

  selectProduct(meta){
    console.log(meta);
    let newSelect = meta;
    meta["prod_quant"]="1";
    let inter=(meta.prod_quant*0.01*meta.product_gst*meta.product_price).toFixed(2);
    meta["prod_frac"]="100";
    console.log(meta);
    this.selectProducts.prods.push(meta);
    let fin=parseFloat(inter);
    console.log(fin);
    this.grossTotal=this.grossTotal+fin;
    console.log(this.grossTotal);
    // console.log(this.selectProducts);
  }

  getGrossTotal(){
    let sum=0;
    for(let i = 0; i < this.selectProducts.prods.length; i++) {
      let temp=this.selectProducts.prods[i];
      sum += temp.prod_quant*temp.product_gst*temp.product_price/temp.prod_frac;
    }
    return sum.toFixed(2);
  }
}

