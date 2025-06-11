import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  protected title = 'Home';
  private readonly router = inject(Router);

  protected goApp(): void {
    this.router.navigate(['/']);
  }
}
