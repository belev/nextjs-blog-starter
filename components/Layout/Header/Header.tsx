import NavigationLink from './NavigationLink';
import Link from '../../Link/Link';
import siteConfig from '../../../siteConfig.json';
import styles from './Header.module.scss';
import Icon from '../../Icon/Icon';

const Header = () => (
  <header className={styles.header}>
    <nav className={styles.navigation}>
      <NavigationLink href="/">Home</NavigationLink>
      <NavigationLink href="/blog">Blog</NavigationLink>
      <NavigationLink href="/about">About</NavigationLink>
    </nav>
    <Link href={`${siteConfig.siteUrl}/rss.xml`} className={styles.rss} aria-label="RSS feed">
      <Icon name="rss" />
    </Link>
  </header>
);

export default Header;
