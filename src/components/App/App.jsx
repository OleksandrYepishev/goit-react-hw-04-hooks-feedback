import { useState } from 'react';
import { Container } from '../Container/Container';
import { Statistics } from '../Statistics/Statistics';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Section } from '../Section/Section';
import { Notification } from '../Notification/Notification';

export const App = () => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleFeedbackChange = option => {
    setState(prevState => ({ ...prevState, [option]: prevState[option] + 1 }));
  };

  const countTotalFeedback = () =>
    Object.values(state).reduce((feedback, acc) => feedback + acc, 0);

  const countPositiveFeedbackPercentage = () => {
    return Math.round((state.good * 100) / countTotalFeedback());
  };

  const isShowStatistics = countTotalFeedback() > 0;

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={state}
          onLeaveFeedback={handleFeedbackChange}
        />
      </Section>
      {isShowStatistics && (
        <Section title="Statistics">
          <Statistics
            good={state.good}
            neutral={state.neutral}
            bad={state.bad}
            total={countTotalFeedback()}
            positiveFeedbacks={countPositiveFeedbackPercentage()}
          />
        </Section>
      )}

      {!isShowStatistics && <Notification message={'No feedback given'} />}
    </Container>
  );
};
