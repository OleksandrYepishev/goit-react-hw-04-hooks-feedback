import { useState } from 'react';
import { Container } from '../Container/Container';
import { Statistics } from '../Statistics/Statistics';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Section } from '../Section/Section';
import { Notification } from '../Notification/Notification';

export const App = () => {
  const [good, setGoodFeedback] = useState(0);
  const [neutral, setNeutralFeedback] = useState(0);
  const [bad, setBadFeedback] = useState(0);

  const feedbackOptions = { good, neutral, bad };

  const handleFeedbackChange = option => {
    switch (option) {
      case 'good':
        setGoodFeedback(value => value + 1);
        break;

      case 'neutral':
        setNeutralFeedback(value => value + 1);
        break;

      case 'bad':
        setBadFeedback(value => value + 1);
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
