import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NewsArticle } from '../models/news.interface';
import { NEWS_SECTIONS } from '../data/news-data';

@Component({
  selector: 'app-article-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="container mx-auto p-4" *ngIf="article">
      <a routerLink="/" class="text-blue-600 hover:underline mb-4 inline-block">← Back to News</a>
      <article class="bg-white rounded-lg shadow-lg p-6 mt-4">
        <img [src]="article.imageUrl" [alt]="article.title" class="w-full h-64 object-cover rounded-lg mb-6">
        <h1 class="text-3xl font-bold mb-2">{{ article.title }}</h1>
        <div class="text-gray-600 mb-4">
          <span>By {{ article.author }} | {{ article.date }}</span>
        </div>
        <p class="text-lg leading-relaxed">{{ article.content }}</p>
      </article>
    </div>
  `
})
export class ArticleDetailComponent implements OnInit {
  article: NewsArticle | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const articleId = this.route.snapshot.paramMap.get('id');
    this.article = NEWS_SECTIONS
      .flatMap(section => section.articles)
      .find(article => article.id === articleId);
  }
}