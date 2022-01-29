import React from 'react';
import VisuallyHidden from '../../VisuallyHidden/VisuallyHidden';
import styles from './SkipNavigationLink.module.scss';

const SkipNavigationLink = () => (
  <VisuallyHidden>
    <a href="#skip-nav" className={styles.link}>
      Skip to content
    </a>
  </VisuallyHidden>
);

export default SkipNavigationLink;
