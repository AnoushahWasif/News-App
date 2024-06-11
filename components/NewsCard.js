// components/NewsCard.js
import styles from '../styles/NewsCard.module.css';

const NewsCard = ({ article }) => (
  <div className={styles.card}>
    <div className={styles.imageContainer}>
      <img src={article.urlToImage} alt={article.title} className={styles.image} />
    </div>
    <div className={styles.content}>
      <h2 className={styles.title}>{article.title}</h2>
      <p className={styles.description}>{article.description}</p>
      <div className={styles.info}>
        <p className={styles.source}>{article.source.name}</p>
        <p className={styles.author}>{article.author}</p>
        <p className={styles.publishedAt}>{new Date(article.publishedAt).toDateString()}</p>
      </div>
      <a href={article.url} target="_blank" rel="noopener noreferrer" className={styles.readMore}>
        Read more
      </a>
    </div>
  </div>
);

export default NewsCard;
