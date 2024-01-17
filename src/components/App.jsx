import React, { useState } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';

export const App = () => {
  const [app, setApp] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleFeedback = option => {
    setApp(prevState => ({ ...prevState, [option]: prevState[option] + 1 }));
  };

  const countTotalFeedback = () => {
    return app.good + app.neutral + app.bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    const { good } = app;
    return Math.round((good * 100) / total);
  };

  const total = countTotalFeedback();
  const positiveFeedback = countPositiveFeedbackPercentage();
  const { good, neutral, bad } = app;
  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(app)}
          handleFeedback={handleFeedback}
        />
      </Section>
      <Section>
        <h2>Statistics</h2>
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positiveFeedback={positiveFeedback}
          />
        ) : (
          <p>No feedback</p>
        )}
      </Section>
    </>
  );
};
