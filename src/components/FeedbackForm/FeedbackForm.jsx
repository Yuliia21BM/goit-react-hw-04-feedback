import { useState } from 'react';

import { Section } from '../Section/Section';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Statics } from '../Statistics/Statistics';

export const FeedbackForm = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedbackButtonClick = e => {
    // const { target } = e;
    // const value = target.name;
    setGood(good + 1);
    setNeutral(neutral + 1);
    setBad(bad + 1);
    console.log(good, neutral, bad);
    // value === 'good' ? setGood(good + 1) : good;
    // value === 'neutral' ? setNeutral(neutral + 1) : neutral;
    // value === 'bad' ? setBad(bad + 1) : bad;
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
        countTotalFeedback={countTotalFeedback}
        countPositiveFeedbackPercentage={countPositiveFeedbackPercentage}
      />
    </Section>
  );
};
