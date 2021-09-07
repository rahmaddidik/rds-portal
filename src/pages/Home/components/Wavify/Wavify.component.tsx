//#region IMPORT
import { useEffect, useState } from 'react';
import Wave from 'react-wavify';
import { useWindowSize } from '../../../../utils';
import styles from './Wavify.component.module.scss';
//#endregion

//#region MAIN
export const Wavify: React.FC = () => {
  const size = useWindowSize();
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    size.width < 768 ? setIsMobile(true) : setIsMobile(false);
  });
  return (
    <div className={styles.container}>
      <Wave
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration={1000}
        data-aos-delay={500}
        className={styles.wave}
        fill="#3a3b7b30"
        paused={false}
        options={{
          height: 50,
          amplitude: 100,
          speed: 0.15,
          points: isMobile ? 2 : 4,
        }}
      />
      <Wave
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration={1000}
        className={styles.wave}
        fill="#3a3b7b30"
        paused={false}
        options={{
          height: 50,
          amplitude: 100,
          speed: 0.15,
          points: isMobile ? 3 : 5,
        }}
      />
    </div>
  );
};
//#endregion
