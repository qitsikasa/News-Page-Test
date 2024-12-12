import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <header class="bg-blue-600 text-white p-4">
      <h1 class="text-2xl font-bold">Daily News</h1>
      <nav class="mt-2">
        <a href="#tech" class="mr-4">Tech</a>
        <a href="#world" class="mr-4">World</a>
        <a href="#business">Business</a>
      </nav>
    </header>
  `,
  styles: [`
    header {
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    a {
      color: white;
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
  `]
})
export class HeaderComponent {}