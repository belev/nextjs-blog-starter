import styles from './Header.module.scss';
import NavigationLink from './NavigationLink';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navigation}>
        <NavigationLink href="/">Home</NavigationLink>
        <NavigationLink href="/blog">Blog</NavigationLink>
        <NavigationLink href="/about">About</NavigationLink>
      </nav>
    </header>
  );
};

export default Header;
