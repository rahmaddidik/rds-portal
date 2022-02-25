//#region IMPORT
import Image from 'next/image';
import { useState } from 'react';
import { IoGlobe, IoImages, IoVideocam, IoImage } from 'react-icons/io5';
import Skeleton from 'react-loading-skeleton';
import { TabItem } from '../../constants';
import styles from './WorkItem.component.module.scss';
//#endregion

//#region INTERFACE
interface Props {
  type: TabItem;
  src: string;
  title?: string;
  link?: string;
}
//#endregion

//#region MAIN
export const WorkItem: React.FC<Props> = ({
  type,
  src,
  title,
  link,
}: Props) => {
  const redirect = () => {
    window.open(link, '_blank');
  };

  const [loaded, setLoaded] = useState(true);

  return (
    <div className={styles.container} onClick={redirect}>
      <div className={styles.icon}>
        {type === TabItem.UID && <IoImages />}
        {type === TabItem.UXE && <IoGlobe />}
        {type === TabItem.VIDEO && <IoVideocam />}
      </div>
      {title && <div className={styles.title}>{title}</div>}
      {loaded && (
        <>
          <IoImage className={styles.skeletonImg} />
          <Skeleton className={styles.skeletonBg} />
        </>
      )}
      <Image
        src={src}
        alt=""
        layout="fill"
        onLoadingComplete={() => setLoaded(false)}
      />
    </div>
  );
};
//#endregion
