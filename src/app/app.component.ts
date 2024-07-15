import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './pages/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { RegistrationComponent } from './pages/registration/registration.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,HomeComponent,RegistrationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'product-ui';
}
