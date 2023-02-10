import { Inter, Style_Script } from '@next/font/google';
import styles from './page.module.scss';

export default function HomePage() {
  return (
    <main>
      <div className="container">
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
