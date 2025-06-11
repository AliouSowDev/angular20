import { Component, inject, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected title = 'App';
  private readonly router = inject(Router);
  protected appActive = true;

  ngOnInit(): void {
    this.router.events.pipe(
      filter(r => r instanceof NavigationEnd))
    .subscribe(r => this.appActive = r.urlAfterRedirects === '' || r.urlAfterRedirects === '/');
  }

  protected goHome(): void {
    this.router.navigate(['home']);
  }
}
