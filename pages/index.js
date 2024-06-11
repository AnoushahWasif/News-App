// pages/index.js
import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import NewsCard from '../components/NewsCard';

export default function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchNews() {
      const res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWS_API_KEY}`);
      const data = await res.json();
      setArticles(data.articles);
    }
    fetchNews();
  }, []);

  return (
    <Layout>
      <h1>Top Headlines</h1>
      {articles.map((article, index) => (
        <NewsCard key={index} article={article} />
      ))}
    </Layout>
  );
}
