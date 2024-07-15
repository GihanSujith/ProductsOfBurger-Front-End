import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {

  public product = {
    name: "",
    description: "",
    category: "",
    price: ""
  }

  saveProduct() {
    console.log(this.product);

    fetch("http://localhost:8080/product", {
      method: 'POST',
      body: JSON.stringify(this.product),
      headers: {"Content-type":"application/json"}
    })
    .then(res=> res.json())
    .then(data =>{
      console.log(data)
    })

  }

}
