import { useState } from 'react';

import { Section } from '../Section/Section';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Statics } from '../Statistics/Statistics';

export const FeedbackForm = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedbackButtonClick = e => {
    const value = e.target.name;
    switch (value) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        return;
    }
  };
  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const totalFeedback = countTotalFeedback();
    if (good > 0) {
      const positiveFeedback = (good * 100) / totalFeedback;
      return Math.round(positiveFeedback);
    } else {
      return 0;
    }
  };

  return (
    <Section title="Please leave feedback">
      <FeedbackOptions onFeedbackButtonClick={handleFeedbackButtonClick} />
      <Statics
        good={good}
        neutral={neutral}
        bad={bad}
        countTotalFeedback={countTotalFeedback()}
        countPositiveFeedbackPercentage={countPositiveFeedbackPercentage()}
      />
    </Section>
  );
};
