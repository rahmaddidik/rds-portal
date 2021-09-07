//#region IMPORT
import { ReactElement } from 'react';
import styles from './SkillCard.component.module.scss';
//#endregion

//#region INTERFACE
export interface Props {
  icon: ReactElement;
  title: string;
  description: string;
}
//#endregion

//#region MAIN
export const SkillCard: React.FC<Props> = ({
  icon,
  title,
  description,
}: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
    </div>
  );
};
//#endregion
