import s from './FeedbackOptions.module.css';
export const FeedbackOptions = ({ options, handleFeedback }) => {
  return (
    <ul className={s.styleList}>
      {options.map(option => (
        <li className={s.styleItem} key={option}>
          <button
            className={s.styleButton}
            key={option}
            type="button"
            onClick={() => {
              handleFeedback(option);
            }}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};
