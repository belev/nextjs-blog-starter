import siteConfig from '../../../siteConfig.json';
import styles from './Footer.module.scss';

const Footer = () => (
  <footer className={styles.footer}>
    <div>
      &copy; {new Date().getFullYear()} by {siteConfig.siteTitle}. All rights reserved.
    </div>
  </footer>
);

export default Footer;
