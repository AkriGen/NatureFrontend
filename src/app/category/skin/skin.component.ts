import { Component, OnInit } from '@angular/core';
import { Product } from '../../product.model';
import { FilterService } from '../../services/filter.service';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-skin',
  standalone: false,
  
  templateUrl: './skin.component.html',
  styleUrl: './skin.component.css'
})
export class SkinComponent implements OnInit{
  products: Product[] = [];

  constructor(private filterService: FilterService, public cartService:CartService, private router:Router) { }

  ngOnInit(): void {
    this.fetchProducts(2);  // Assuming '1' is the categoryId for Skin
  }

  fetchProducts(categoryId: number): void {
    this.filterService.getProductsByCategory(categoryId).subscribe(data => {
      this.products = data;
    });
  }
  // Add product to the cart
  addToCart(product: Product) {
    if (product && product.productId) {  // Check if product is valid
      this.cartService.addToCart(product);
      alert(`${product.productName} added to cart!`);
    } else {
      console.error('Invalid product:', product); // Log if the product is invalid
    }
  }
  

  // Buy product immediately and proceed to payment
  buyNow(product: Product) {
    // Check if the product is in stock
    if (product.stockQuantity > 0) {
      this.cartService.addToCart(product);
      // Navigate to the payment page
      this.router.navigate(['/payment']);
    } else {
      alert(`${product.productName} is out of stock.`);
    }
  }

}
