import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';
import * as AOS from 'aos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: false,
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  products: Product[] = [];
  bestSellers: Product[] = [];

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private router:Router
  ) {}


  ngOnInit(): void {
    // Fetch products and initialize best sellers
    this.products = this.productService.getProducts();
    console.log('Products:', this.products); // Check if all products are valid
    this.bestSellers = [...this.products]  // Make a copy of the products
      .sort(() => 0.5 - Math.random()) // Randomize the products
      .slice(0, 3); // Get first 3 random products
    AOS.init();  
     }
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
