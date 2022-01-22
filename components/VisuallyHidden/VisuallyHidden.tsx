import React from 'react';
import styles from './VisuallyHidden.module.scss';

const VisuallyHidden = ({ children }: React.PropsWithChildren<unknown>) => (
  <div className={styles.hidden}>{children}</div>
);

export default VisuallyHidden;
