// components/NewsCard.js
import styles from '../styles/NewsCard.module.css';

const NewsCard = ({ article }) => (
  <div className={styles.card}>
    <h2>{article.title}</h2>
    <p>{article.description}</p>
    <a href={article.url} target="_blank" rel="noopener noreferrer">
      Read more
    </a>
  </div>
);

export default NewsCard;
