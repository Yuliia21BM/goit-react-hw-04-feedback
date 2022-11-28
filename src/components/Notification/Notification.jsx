import PropTypes from 'prop-types';

import { NotificationMesage } from './Notification.styled';

export const Notification = ({ message }) => {
  return <NotificationMesage>{message}</NotificationMesage>;
};

Notification.propTypes = {
  message: PropTypes.string,
};
