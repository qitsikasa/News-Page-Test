import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NewsArticle } from '../models/news.interface';

@Component({
  selector: 'app-news-section',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="p-4" [id]="title.toLowerCase().replace(' ', '-')">
      <h2 class="text-xl font-bold mb-4">{{ title }}</h2>
      <div class="grid gap-4">
        <article *ngFor="let article of articles" 
                class="border p-4 rounded cursor-pointer hover:shadow-lg"
                [routerLink]="['/article', article.id]">
          <img [src]="article.imageUrl" [alt]="article.title" class="w-full h-48 object-cover rounded mb-4">
          <h3 class="font-bold text-lg">{{ article.title }}</h3>
          <p class="mt-2 text-gray-600">{{ article.summary }}</p>
          <div class="mt-4 text-sm text-gray-500">
            <span>{{ article.date }} | By {{ article.author }}</span>
          </div>
        </article>
      </div>
    </section>
  `
})
export class NewsSectionComponent {
  @Input() title!: string;
  @Input() articles: NewsArticle[] = [];
}