import icons from './icons';

type IconName = keyof typeof icons;

type Props = JSX.IntrinsicElements['svg'] & {
  className?: string;
  name: IconName;
  label?: string;
};

const Icon = ({ className, name, label, ...rest }: Props) => {
  const IconComponent = icons[name];

  const iconProps = {
    'aria-label': label,
    'aria-hidden': !label ? true : undefined,
    role: label ? 'img' : undefined,
    className,
    ...rest
  };

  return <IconComponent {...iconProps} />;
};

export default Icon;
