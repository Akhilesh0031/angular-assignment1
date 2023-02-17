import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CartProj';
  items = [
    { name: '', price: 0, quantity: 0 },
  ];

  newItem = { name: '', price: 0, quantity: 0 };

  grandTotal = 0;

  addItem() {
    this.items.push(this.newItem);
    this.newItem = { name: '', price: 0, quantity: 0 };
    this.updateTotal();
  }

  deleteItem(item: { name: string; price: number; quantity: number; }) {
    const index = this.items.indexOf(item);
    this.items.splice(index, 1);
    this.updateTotal();
  }

  updateTotal() {
    this.grandTotal = 0;
    for (const item of this.items) {
      this.grandTotal =this.grandTotal+ (item.price * item.quantity);
    }
  }

}
