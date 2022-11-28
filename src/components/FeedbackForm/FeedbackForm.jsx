import { Component } from 'react';

import { Section } from '../Section/Section';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Statics } from '../Statistics/Statistics';

// import PropTypes from 'prop-types';

export class FeedbackForm extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedbackButtonClick = e => {
    const { target } = e;
    const value = target.name;
    this.setState(prevState => {
      return { [value]: (prevState[value] += 1) };
    });
  };

  countTotalFeedback = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const totalFeedback = this.countTotalFeedback();
    if (this.state.good > 0) {
      const positiveFeedback = (this.state.good * 100) / totalFeedback;
      return Math.round(positiveFeedback);
    } else {
      return 0;
    }
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          onFeedbackButtonClick={this.handleFeedbackButtonClick}
        />
        <Statics
          good={good}
          neutral={neutral}
          bad={bad}
          countTotalFeedback={this.countTotalFeedback()}
          countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage()}
        />
      </Section>
    );
  }
}
