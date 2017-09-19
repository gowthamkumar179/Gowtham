import { Component } from '@angular/core';
import { productService } from '../services/product.services';
import { DataService} from '../services/data.services'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
       private products:Array<any>
       private NavItems:Array<any>
       private CartItems:Array<any>
  constructor( private prdSvc:productService, private DataSvc:DataService) { 
       this.NavItems=this.DataSvc.getNavItems();
       this.products=this.prdSvc.getproducts();
       this.CartItems=this.prdSvc.getCartItems();

  }



}
