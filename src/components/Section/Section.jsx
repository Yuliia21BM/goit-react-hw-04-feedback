import { Box } from '../Box';
import PropTypes from 'prop-types';

import { FeedbackTitle } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <Box textAlign="center">
      <FeedbackTitle>{title}</FeedbackTitle>
      {children}
    </Box>
  );
};

Section.propTypes = {
  title: PropTypes.string,
};
