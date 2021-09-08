//#region IMPORT
import { useEffect } from 'react';
import { IconBackground } from '../../../../assets/icons';
import { useMousePosition } from '../../../../utils';
import styles from './Background.component.module.scss';
//#endregion

//#region MAIN
export const Background: React.FC = () => {
  const { x, y } = useMousePosition();
  useEffect(() => {
    document.querySelectorAll('#IconBackground path').forEach((layer) => {
      const data = layer.getAttribute('data-speed');
      const speed = parseInt(data || '1');
      const positionX = (layer.clientWidth - x * speed) / 150;
      const positionY = (layer.clientHeight - y * speed) / 150;

      layer.setAttribute('transform', `translate(${positionX}, ${positionY})`);
    });
  });

  return (
    <div
      data-aos="fade-in"
      data-aos-anchor-placement="top-bottom"
      data-aos-duration={2000}
      className={styles.container}
    >
      <IconBackground />
    </div>
  );
};
//#endregion
