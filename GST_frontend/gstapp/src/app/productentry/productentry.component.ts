import { Component, OnInit } from '@angular/core';
import {ToolbarModule} from 'primeng/toolbar';  

@Component({
  selector: 'app-productentry',
  templateUrl: './productentry.component.html',
  styleUrls: ['./productentry.component.scss']
})
export class ProductentryComponent implements OnInit {

  allentries;

  constructor() { }

  ngOnInit() {
    this.getAllProducts();
  } 
  
  getAllProducts(){
    console.log("Started");

    let prod ={
      "products": [
        {
      "product_code":"123x",
      "product_name":"something",
      "product_price":"1247",
      "product_gst":"15"
      },
      {
        "product_code":"254k",
        "product_name":"something1",
        "product_price":"127",
        "product_gst":"18"
      },
      {
        "product_code":"783x",
        "product_name":"something2",
        "product_price":"124",
        "product_gst":"5"
      },
      {
        "product_code":"423x",
        "product_name":"something3",
        "product_price":"247",
        "product_gst":"9"
      },
    ]
    }
    let another = prod.products;
    this.allentries=another;



    console.log("End");
  }


}
