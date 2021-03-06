import Link from '../Link/Link';
import styles from './PageSection.module.scss';

type Props = React.PropsWithChildren<{
  heading: string;
  navigation?: {
    href: string;
    text: string;
  };
}>;

const PageSection = ({ heading, navigation, children }: Props) => (
  <section>
    <div className={styles.headingWrapper}>
      <h2 className={styles.heading}>{heading}</h2>
      {navigation && (
        <div>
          <Link href={navigation.href} variant="secondary">
            {navigation.text}
          </Link>
        </div>
      )}
    </div>
    {children}
  </section>
);

export default PageSection;
