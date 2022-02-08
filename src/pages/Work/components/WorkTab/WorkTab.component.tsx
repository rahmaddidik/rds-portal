//#region IMPORT
import { TabItem } from '../../constants';
import styles from './WorkTab.component.module.scss';
//#endregion

//#region INTERFACE
interface Props {
  activeMenu: TabItem;
  onClick(value: TabItem): void;
}
//#endregion

//#region MAIN
export const WorkTab: React.FC<Props> = ({ activeMenu, onClick }: Props) => {
  const tabs = [
    {
      code: TabItem.UID,
      label: 'UI Design',
    },
    {
      code: TabItem.UXE,
      label: 'UX Engineer',
    },
    {
      code: TabItem.VIDEO,
      label: 'Video',
    },
  ];

  return (
    <div className={styles.container}>
      {tabs.map((item, i) => (
        <div
          key={`tab-${i}`}
          className={activeMenu === item.code ? styles.itemActive : styles.item}
          onClick={() => onClick(item.code)}
        >
          {item.label}
        </div>
      ))}
    </div>
  );
};
//#endregion
