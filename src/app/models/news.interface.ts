export interface NewsArticle {
  id: string;
  title: string;
  summary: string;
  content: string;
  date: string;
  author: string;
  imageUrl?: string;
}

export interface NewsSection {
  id: string;
  title: string;
  articles: NewsArticle[];
}