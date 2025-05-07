import { Component, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../models/product';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EventEmitter } from 'stream';
import { IProduct } from '../../models/product.interface';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss'
})
export class ProductFormComponent  implements OnInit {
  @Input() isEditMode = false;
  @Output() submit = new EventEmitter<IProduct>();
  @Output() closeModal = new EventEmitter<void>();
  @Input()
  product!: Product;

  ngOnInit(): void {
  }

  onCloseModal(): void {
    this.closeModal.emit();
  }

  onSubmit(): void {
    // Implementação do método onSubmit
    if (this.isEditMode) {
      // Lógica para atualizar o produto
      this.submit.emit(this.product);
      console.log('Produto atualizado:', this.product);
    } else {
      // Lógica para adicionar um novo produto
      this.submit.emit(this.product);
      console.log('Novo produto adicionado:', this.product);
    }
    throw new Error('Method not implemented.');
  }
}
