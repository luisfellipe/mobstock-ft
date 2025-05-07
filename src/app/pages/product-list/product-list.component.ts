import { Component, Output } from '@angular/core';
import { Product } from '../../models/product';
import { CommonModule } from '@angular/common';
import { IProduct } from '../../models/product.interface';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  products: Array<Product> = [];

  @Output('product')
  selectedProduct!: IProduct;
  isModalVisible = false;
  isEdit = false;

deleteProduct(_t12: Product) {
throw new Error('Method not implemented.');
}
editProduct(_t12: Product) {
throw new Error('Method not implemented.');
}

onSelect(index: number){
  if(!(index > this.products.length || index < 0) ){
    this.selectedProduct =  this.products.at(index) as Product;
  }else {
    throw new Error('Product not exist');
  }
}

openAddProductModal(): void {
  this.isEdit = false;
  this.selectedProduct = { name: '', price: 0, desc: '', amount: 0 }; // Reseta usando a interface
  this.isModalVisible = true;
}

openEditProductModal(product: Product): void {
  this.isEdit = true;
  this.selectedProduct = { ...product }; // Continua funcionando com a interface
  this.isModalVisible = true;
}

closeProductModal(): void {
  this.isModalVisible = false;
}

handleProductSubmit(product: Product): void {
  if (product.id) {
    // Lógica para atualizar um produto existente
    const index = this.products.findIndex(p => p.id === product.id);
    if (index !== -1) {
      this.products[index] = product;
    }
    console.log('Produto atualizado:', product);
  } else {
    // Lógica para adicionar um novo produto
    product.id = Math.random().toString(); // Simulação de ID como string
    this.products.push(product);
    console.log('Produto adicionado:', product);
  }
  this.closeProductModal();
}
    
}
