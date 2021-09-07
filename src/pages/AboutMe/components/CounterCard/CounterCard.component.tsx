//#region IMPORT
import { ReactElement } from 'react';
import styles from './CounterCard.component.module.scss';
import { animated, useSpring } from 'react-spring';
//#endregion

//#region INTERFACE
export interface Props {
  icon: ReactElement;
  value: number;
  text: string;
  isMore?: boolean;
}
//#endregion

//#region MAIN
export const CounterCard: React.FC<Props> = ({
  icon,
  value,
  text,
  isMore,
}: Props) => {
  const { counter } = useSpring({
    from: {
      counter: 0,
    },
    to: { counter: value },
    config: {
      duration: 1500,
    },
  });
  return (
    <div className={styles.container}>
      <div className={styles.icon}>{icon}</div>
      <animated.div className={styles.count}>
        {counter.interpolate((val) => `${val.toFixed()}${isMore ? '+' : ''}`)}
      </animated.div>
      <div className={styles.text}>{text}</div>
    </div>
  );
};
//#endregion
