import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface NewsItem {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  image: string;
  publishedAt: string;
  author?: string;
}

interface NewsCardProps {
  news: NewsItem;
}

const NewsCard: React.FC<NewsCardProps> = ({ news }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('vi-VN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="news-card">
      <div className="news-image">
        <Link href={`/news/${news.slug}`}>
          <Image
            src={news.image}
            alt={news.title}
            width={300}
            height={200}
            className="img-responsive"
          />
        </Link>
      </div>
      
      <div className="news-content">
        <div className="news-meta">
          <span className="news-date">{formatDate(news.publishedAt)}</span>
          {news.author && (
            <span className="news-author">Bởi {news.author}</span>
          )}
        </div>
        
        <h3 className="news-title">
          <Link href={`/news/${news.slug}`}>
            {news.title}
          </Link>
        </h3>
        
        <p className="news-excerpt">
          {news.excerpt}
        </p>
        
        <div className="news-actions">
          <Link href={`/news/${news.slug}`} className="btn btn-outline">
            Đọc thêm
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;

