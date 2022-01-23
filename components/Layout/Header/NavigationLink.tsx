import { useRouter } from 'next/router';
import classNames from 'clsx';
import Link from '../../Link/Link';
import styles from './NavigationLink.module.scss';

type Props = React.PropsWithChildren<{ href: string }>;

const NavigationLink = ({ href, children }: Props) => {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <Link href={href} className={classNames(styles.navigationLink, { [styles.active]: isActive })}>
      {children}
    </Link>
  );
};

export default NavigationLink;
