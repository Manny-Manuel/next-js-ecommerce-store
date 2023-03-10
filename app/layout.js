import './globals.scss';
import Image from 'next/image';
import Link from 'next/link';
import RootNotFound from 'next/navigation';
import logo from '../public/logo.png';
import CookiesBanner from './CookiesBanner';
import ImageLogo from './ImageLogo';
import LandingImageBottom from './LandingImageBottom';
import styles from './layout.module.scss';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}

      <head />
      <body>
        <header className={styles.header}>
          <div />
          {/* <Image className="img" src={logo} /> */}

          <nav>
            <ImageLogo />
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/collection">Collection</Link>

            <Link href="/services">Services</Link>
          </nav>
        </header>

        {children}
        <div className="rec-sq">
          <div className="square">
            Live
            <br />
            Breath
            <h1>Dream</h1>
          </div>
          <div className="rectangle">
            <h1>Music</h1>
          </div>
          <div className="square-1">
            {' '}
            Feel it<h1>Wave it</h1>
            <h2>Sounds</h2>
          </div>
          <div className="rectangle-1">
            Nature <h1>Life</h1>
            <h2>Emotions</h2>
            <br />
          </div>
        </div>
        <LandingImageBottom />
        <CookiesBanner />
        <footer className={styles.footer}>
          Copyright Tabú Inc 2023 Sponsor by Sound of Nature
        </footer>
      </body>
    </html>
  );
}
