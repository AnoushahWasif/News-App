// components/Layout.js
import Head from 'next/head';
import styles from '../styles/Layout.module.css';

const Layout = ({ children }) => (
  <>
    <Head>
      <title>News App</title>
      <meta name="description" content="A simple news app built with Next.js" />
    </Head>
    <header className={styles.header}>
      <h1>News App</h1>
    </header>
    <main className={styles.main}>{children}</main>
    <footer className={styles.footer}>
      <p>© 2024 News App</p>
    </footer>
  </>
);

export default Layout;
