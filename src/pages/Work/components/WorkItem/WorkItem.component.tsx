//#region IMPORT
import Image from 'next/image';
import { IoGlobe, IoImages, IoVideocam } from 'react-icons/io5';
import { TabItem } from '../../constants';
import styles from './WorkItem.component.module.scss';
//#endregion

//#region INTERFACE
interface Props {
  type: TabItem;
  src: string;
  title?: string;
}
//#endregion

//#region MAIN
export const WorkItem: React.FC<Props> = ({ type, src, title }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        {type === TabItem.UID && <IoImages />}
        {type === TabItem.UXE && <IoGlobe />}
        {type === TabItem.VIDEO && <IoVideocam />}
      </div>
      {title && <div className={styles.title}>{title}</div>}
      <Image src={src} alt="" layout="fill" />
    </div>
  );
};
//#endregion
