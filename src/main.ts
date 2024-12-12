import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { provideRouter, RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './app/header/header.component';
import { NewsSectionComponent } from './app/news-section/news-section.component';
import { ArticleDetailComponent } from './app/article-detail/article-detail.component';
import { NEWS_SECTIONS } from './app/data/news-data';
import { NewsSection } from './app/models/news.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet, HeaderComponent, NewsSectionComponent],
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
  `
})
export class App {
  newsSections: NewsSection[] = NEWS_SECTIONS;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NewsSectionComponent],
  template: `
    <main class="container mx-auto mt-8">
      <app-news-section
        *ngFor="let section of newsSections"
        [title]="section.title"
        [articles]="section.articles"
      ></app-news-section>
    </main>
  `
})
export class HomeComponent {
  newsSections: NewsSection[] = NEWS_SECTIONS;
}

bootstrapApplication(App, {
  providers: [
    provideRouter([
      { path: '', component: HomeComponent },
      { path: 'article/:id', component: ArticleDetailComponent }
    ])
  ]
});