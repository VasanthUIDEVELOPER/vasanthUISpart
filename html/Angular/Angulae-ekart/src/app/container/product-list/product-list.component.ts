import { Component, Input } from '@angular/core';
import{Product} from './../../Models/product';

@Component({
  selector: 'app-product-list',
  // standalone: true,
  // imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  selectedproduct: Product;
  products = [
    {
      id: 1,
      name: "Nike React Infinity Run Flyknit",
      description: "Lorem Ipsum",
      brand:"Nike",
      gender:"Men",
      category:"Running",
      size:[6,7,8,9,10],
      color:["White","Blue","Black"],
      price:160,
      is_in_inventory:true,
      items_left:3,
      imageURL:"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/40625c4a-ef13-4505-b63f-b3cd425f54b3/revolution-7-road-running-shoes-dC34tK.png",
      slug:"nike-react-infinity-run-flyknit"
    },
    {
      id: 2,
      name: "Nike React Infinity Run Flyknit",
      description: "Lorem Ipsum",
      brand:"Nike",
      gender:"Men",
      category:"Running",
      size:[6,7,8,9,10],
      color:["White","Blue","Black"],
      price:130,
      discountprice:110,
      is_in_inventory:false,
      items_left:3,
      imageURL:"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0353238a-9f78-44ff-a66b-6afade53fdd6/book-1-ep-basketball-shoes-n7hzkw.png",
      slug:"nike-react-infinity-run-flyknit"    
    },
    {
      id: 3,
      name: "Nike React Infinity Run Flyknit",
      description: "Lorem Ipsum",
      brand:"Nike",
      gender:"Men",
      category:"Running",
      size:[6,7,8,9,10],
      color:["White","Blue","Black"],
      price:160,
      is_in_inventory:true,
      items_left:3,
      imageURL:"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/40625c4a-ef13-4505-b63f-b3cd425f54b3/revolution-7-road-running-shoes-dC34tK.png",
      slug:"nike-react-infinity-run-flyknit"
    },
    {
      id: 4,
      name: "Nike React Infinity Run Flyknit",
      description: "Lorem Ipsum",
      brand:"Nike",
      gender:"Men",
      category:"Running",
      size:[6,7,8,9,10],
      color:["White","Blue","Black"],
      price:130,
      discountprice:110,
      is_in_inventory:false,
      items_left:3,
      imageURL:"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0353238a-9f78-44ff-a66b-6afade53fdd6/book-1-ep-basketball-shoes-n7hzkw.png",
      slug:"nike-react-infinity-run-flyknit"    
    },
    {
      id: 5,
      name: "Nike React Infinity Run Flyknit",
      description: "Lorem Ipsum",
      brand:"Nike",
      gender:"Men",
      category:"Running",
      size:[6,7,8,9,10],
      color:["White","Blue","Black"],
      price:160,
      is_in_inventory:true,
      items_left:3,
      imageURL:"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/40625c4a-ef13-4505-b63f-b3cd425f54b3/revolution-7-road-running-shoes-dC34tK.png",
      slug:"nike-react-infinity-run-flyknit"
    },
    {
      id: 6,
      name: "Nike React Infinity Run Flyknit",
      description: "Lorem Ipsum",
      brand:"Nike",
      gender:"Men",
      category:"Running",
      size:[6,7,8,9,10],
      color:["White","Blue","Black"],
      price:130,
      discountprice:110,
      is_in_inventory:false,
      items_left:3,
      imageURL:"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0353238a-9f78-44ff-a66b-6afade53fdd6/book-1-ep-basketball-shoes-n7hzkw.png",
      slug:"nike-react-infinity-run-flyknit"    
    },
    {
      id: 7,
      name: "Nike React Infinity Run Flyknit",
      description: "Lorem Ipsum",
      brand:"Nike",
      gender:"Men",
      category:"Running",
      size:[6,7,8,9,10],
      color:["White","Blue","Black"],
      price:160,
      is_in_inventory:true,
      items_left:3,
      imageURL:"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/40625c4a-ef13-4505-b63f-b3cd425f54b3/revolution-7-road-running-shoes-dC34tK.png",
      slug:"nike-react-infinity-run-flyknit"
    },
    {
      id: 8,
      name: "Nike React Infinity Run Flyknit",
      description: "Lorem Ipsum",
      brand:"Nike",
      gender:"Men",
      category:"Running",
      size:[6,7,8,9,10],
      color:["White","Blue","Black"],
      price:130,
      discountprice:110,
      is_in_inventory:false,
      items_left:3,
      imageURL:"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0353238a-9f78-44ff-a66b-6afade53fdd6/book-1-ep-basketball-shoes-n7hzkw.png",
      slug:"nike-react-infinity-run-flyknit"    
    },
    {
      id: 9,
      name: "Nike React Infinity Run Flyknit",
      description: "Lorem Ipsum",
      brand:"Nike",
      gender:"Men",
      category:"Running",
      size:[6,7,8,9,10],
      color:["White","Blue","Black"],
      price:160,
      is_in_inventory:true,
      items_left:3,
      imageURL:"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/40625c4a-ef13-4505-b63f-b3cd425f54b3/revolution-7-road-running-shoes-dC34tK.png",
      slug:"nike-react-infinity-run-flyknit"
    },
    {
      id: 10,
      name: "Nike React Infinity Run Flyknit",
      description: "Lorem Ipsum",
      brand:"Nike",
      gender:"Men",
      category:"Running",
      size:[6,7,8,9,10],
      color:["White","Blue","Black"],
      price:130,
      discountprice:110,
      is_in_inventory:false,
      items_left:3,
      imageURL:"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0353238a-9f78-44ff-a66b-6afade53fdd6/book-1-ep-basketball-shoes-n7hzkw.png",
      slug:"nike-react-infinity-run-flyknit"    
    }
  ];
  totalproductcount=this.products.length;
  totalproductinstock=this.products.filter(p=>p.is_in_inventory===true).length;
  totalproductoutstock=this.products.filter(p=>p.is_in_inventory===false).length;
  @Input()
  searchtext:string='';
  selectedfilterradiobutton: string='all';
  onfilterchange(value: string){
    this.selectedfilterradiobutton=value;
  }
}
