import React from 'react';
import styles from './PageInformation.module.scss';

type Props = React.PropsWithChildren<{ heading: string }>;

const PageInformation = ({ heading, children }: Props) => (
  <section>
    <h1 className={styles.heading}>{heading}</h1>
    {children}
  </section>
);

export default PageInformation;
