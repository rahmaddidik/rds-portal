//#region IMPORT
import styles from './TitlePage.component.module.scss';
import { IconGrid } from '../../assets/icons';
import Typist from 'react-text-typist';
//#endregion

//#region INTERFACE
export interface Props {
  text: string;
}
//#endregion

//#region MAIN
export const TitlePage: React.FC<Props> = ({ text }: Props) => {
  return (
    <div
      data-aos="fade-down"
      data-aos-anchor-placement="top-bottom"
      data-aos-duration={1000}
      className={styles.container}
    >
      <h1>
        <Typist
          className={styles.stack}
          sentences={[text]}
          typingSpeed={100}
          startDelay={500}
          hideCursorOnFinish={true}
          loop={false}
        />
      </h1>
      <IconGrid />
    </div>
  );
};
//#endregion
