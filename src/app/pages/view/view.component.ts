import { CommonModule, NgFor } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [NgFor,HttpClientModule,CommonModule],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {
  

  public productList : any;

  constructor(private http:HttpClient){
    this.loadProducts();
  }

  loadProducts(){
    this.http.get("http://localhost:8080/product").subscribe(res=>{
      this.productList=res;
      console.log(res);
    })
  }

  deleteProduct(product:any){

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {

        this.http.delete(`http://localhost:8080/product/delete-product/${product.id}`,{responseType:'text'}).subscribe(res=>{
          this.loadProducts()
          swalWithBootstrapButtons.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
          console.log(res);
        })
        console.log(product);


      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire({
          title: "Cancelled",
          text: "Your imaginary file is safe :)",
          icon: "error"
        });
      }
    });

  }
  }


