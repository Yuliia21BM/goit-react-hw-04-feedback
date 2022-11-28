import PropTypes from 'prop-types';
import { Notification } from '../Notification/Notification';
import {
  StaticsTitle,
  StaticsList,
  StaticsItem,
  StaticsNumber,
  Static,
} from './Statistics.styled';

import { Box } from '../Box';
export const Statics = ({
  good,
  neutral,
  bad,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) => {
  return (
    <Box width="450px" ml="auto" mr="auto">
      <StaticsTitle>Statistics</StaticsTitle>
      <StaticsList>
        <StaticsItem>
          Good: <StaticsNumber> {good}</StaticsNumber>
        </StaticsItem>
        <StaticsItem>
          Neutral: <StaticsNumber> {neutral}</StaticsNumber>
        </StaticsItem>
        <StaticsItem>
          Bad: <StaticsNumber>{bad}</StaticsNumber>{' '}
        </StaticsItem>
      </StaticsList>
      {countTotalFeedback > 0 ? (
        <Box display="flex" justifyContent="space-around" alignItems="center">
          <Static>
            Total: <StaticsNumber> {countTotalFeedback}</StaticsNumber>
          </Static>
          <Static>
            Positive feedback:{' '}
            <StaticsNumber>{countPositiveFeedbackPercentage} %</StaticsNumber>
          </Static>
        </Box>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </Box>
  );
};

Statics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  countTotalFeedback: PropTypes.number,
  countPositiveFeedbackPercentage: PropTypes.number,
};
