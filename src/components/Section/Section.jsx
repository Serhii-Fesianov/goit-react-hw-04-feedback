import s from './Section.module.css';

export const Section = ({ children, title }) => {
  return (
    <section className={s.styleSection}>
      <h2 className={s.styleHeader}>{title}</h2>
      {children}
    </section>
  );
};
