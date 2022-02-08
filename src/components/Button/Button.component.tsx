//#region IMPORT
import Link from 'next/link';
import styles from './Button.component.module.scss';
//#endregion

//#region INTERFACE
export interface Props {
  text: string;
  className?: string;
  onClick?(): void;
  to?: string;
  download?: boolean;
}
//#endregion

//#region MAIN
export const Button: React.FC<Props> = ({
  text,
  onClick,
  className,
  to,
}: Props) => {
  return to ? (
    <Link href={to}>
      <div className={`${styles.container} ${className}`}>{text}</div>
    </Link>
  ) : (
    <div className={`${styles.container} ${className}`} onClick={onClick}>
      {text}
    </div>
  );
};
//#endregion
