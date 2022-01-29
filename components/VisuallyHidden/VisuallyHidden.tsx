import React from 'react';
import classNames from 'clsx';
import styles from './VisuallyHidden.module.scss';

interface Props {
  children: React.ReactElement;
}

const VisuallyHidden = ({ children }: Props) =>
  React.cloneElement(children, {
    ...children.props,
    className: classNames(styles.hidden, children.props['className'])
  });

export default VisuallyHidden;
