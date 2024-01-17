import s from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positiveFeedback,
  title,
}) => {
  return (
    <>
      <h2 className={s.styleHeader}>{title}</h2>
      <ul className={s.styleList}>
        <li className={s.styleItem}>Good:{good}</li>
        <li className={s.styleItem}>Neutral:{neutral}</li>
        <li className={s.styleItem}>Bad:{bad}</li>
        <li className={s.styleItem}>Total:{total}</li>
        <li className={s.styleItem}>Positive feedback: {positiveFeedback}%</li>
      </ul>
    </>
  );
};
