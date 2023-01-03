/* @Footer • Dynamic Component */
import Image from 'next/image';
import styles from './page.module.scss';

export const vercelURL = 'https://vercel.com';

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <a
          href={vercelURL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            className={styles.vercelLogo}
            width={80}
            height={20}
          />
        </a>
      </footer>
    </>
  );
}
