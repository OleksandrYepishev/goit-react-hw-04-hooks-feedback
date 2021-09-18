import { useState } from 'react';
import { Container } from '../Container/Container';
import { Statistics } from '../Statistics/Statistics';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Section } from '../Section/Section';
import { Notification } from '../Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedbackOptions = { good, neutral, bad };

  const handleFeedbackChange = option => {
    switch (option) {
      case 'good':
        setGood(value => value + 1);
        break;

      case 'neutral':
        setNeutral(value => value + 1);
        break;

      case 'bad':
        setBad(value => value + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good * 100) / countTotalFeedback());
  };

  const isShowStatistics = countTotalFeedback() > 0;

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={feedbackOptions}
          onLeaveFeedback={handleFeedbackChange}
        />
      </Section>
      {isShowStatistics && (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positiveFeedbacks={countPositiveFeedbackPercentage()}
          />
        </Section>
      )}

      {!isShowStatistics && <Notification message={'No feedback given'} />}
    </Container>
  );
};
