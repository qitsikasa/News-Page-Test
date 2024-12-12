import { NewsSection } from '../models/news.interface';

export const NEWS_SECTIONS: NewsSection[] = [
  {
    id: 'tech',
    title: 'Tech News',
    articles: [
      {
        id: 'tech-1',
        title: 'AI Breakthrough in Healthcare',
        summary: 'New AI model shows promising results in early disease detection.',
        content: 'Scientists have developed a groundbreaking AI model that can detect early signs of various diseases with unprecedented accuracy. This development marks a significant milestone in healthcare technology...',
        date: 'Jan 15, 1970',
        author: 'John Smith',
        imageUrl: 'https://picsum.photos/800/400?random=1'
      },
      {
        id: 'tech-2',
        title: 'Latest Smartphone Release',
        summary: 'Tech giant unveils revolutionary features in their newest device.',
        content: 'The newest smartphone release promises to revolutionize mobile technology with innovative features including advanced AI capabilities and breakthrough battery technology...',
        date: 'Jan 14, 1970',
        author: 'Jane Doe',
        imageUrl: 'https://picsum.photos/800/400?random=2'
      }
    ]
  },
  {
    id: 'world',
    title: 'World News',
    articles: [
      {
        id: 'world-1',
        title: 'Climate Summit 1970',
        summary: 'World leaders gather to discuss environmental challenges.',
        content: 'Leaders from around the world have convened to address pressing environmental concerns and establish new guidelines for environmental protection...',
        date: 'Jan 13, 1970',
        author: 'Robert Johnson',
        imageUrl: 'https://picsum.photos/800/400?random=3'
      },
      {
        id: 'world-2',
        title: 'Space Exploration Update',
        summary: 'New mission announced to explore distant planets.',
        content: 'Space agencies worldwide are collaborating on an ambitious new mission to explore the outer reaches of our solar system...',
        date: 'Jan 12, 1970',
        author: 'Sarah Williams',
        imageUrl: 'https://picsum.photos/800/400?random=4'
      }
    ]
  },
  {
    id: 'business',
    title: 'Business News',
    articles: [
      {
        id: 'business-1',
        title: 'Market Trends',
        summary: 'Global markets show positive growth in technology sector.',
        content: 'The technology sector continues to drive global market growth with unprecedented investments in emerging technologies...',
        date: 'Jan 11, 1970',
        author: 'Michael Brown',
        imageUrl: 'https://picsum.photos/800/400?random=5'
      },
      {
        id: 'business-2',
        title: 'Startup Success',
        summary: 'Local startup receives major investment funding.',
        content: 'A promising local startup has secured significant funding to expand their innovative solution globally...',
        date: 'Jan 10, 1970',
        author: 'Emily Davis',
        imageUrl: 'https://picsum.photos/800/400?random=6'
      }
    ]
  }
];