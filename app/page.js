import { Inter, Style_Script } from '@next/font/google';
import { NotFound } from 'next/navigation';
import CookiesBanner from './CookiesBanner';
import ImageCarrusel from './ImageCarrusel';
import styles from './page.module.scss';

export default function HomePage() {
  return (
    <main>
      <div className="container">
        <ImageCarrusel />

        <div className="rectangle-top">
          <img
            className={styles.responsive}
            src="/wave.jpg"
            alt="wave"
            width="100%"
          />
        </div>
        <img className={styles.image} src="/headphone.jpg" alt="quantum" />
      </div>
    </main>
  );
}
