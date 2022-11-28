import PropTypes from 'prop-types';
import { Box } from '../Box';
import { FeedbackButton } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ onFeedbackButtonClick }) => {
  return (
    <Box>
      <FeedbackButton
        type="button"
        name="good"
        backgroundColor="green"
        onClick={onFeedbackButtonClick}
      >
        Good
      </FeedbackButton>
      <FeedbackButton
        type="button"
        name="neutral"
        backgroundColor="blue"
        onClick={onFeedbackButtonClick}
      >
        Neutral
      </FeedbackButton>
      <FeedbackButton
        type="button"
        name="bad"
        backgroundColor="red"
        onClick={onFeedbackButtonClick}
      >
        Bad
      </FeedbackButton>
    </Box>
  );
};

FeedbackOptions.propTypes = {
  onFeedbackButtonClick: PropTypes.func,
};
