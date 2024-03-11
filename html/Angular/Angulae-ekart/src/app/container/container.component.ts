import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  // standalone: true,
  // imports: [],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class containerComponent {
  // // name=" ";
  // // addtocart:number=10;
  // // product ={
  // // name:'iPhone X',
  // // price:1200,
  // // color:'Red',
  // // discount: 8.5,
  // // instock: 10,
  // // pimage: '../../assets/images/iphone.png'
  // // }
  // // getdiscountedprice(){
  // //   return this.product.price-(this.product.price*this.product.discount/100)
  // // }
  // // onnamechange(event:any){
  // //   this.name=event.target.value;
  // // }
  // // decrementcartvalue(){
  // //   if(this.addtocart>0){
  // //   this.addtocart--;
  // //   }
  // // }
  // // incrementcartvalue(){
  // //   if(this.addtocart<this.product.instock){
  // //   this.addtocart++;
  //   }
  // }
  listofstring: string[]=['Mark', 'steve','merry','john','sarah'];
  searchtext: string='';
  setsearchtext(value: string){
    this.searchtext=value;
  }
}
