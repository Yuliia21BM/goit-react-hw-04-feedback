import styled from 'styled-components';

export const FeedbackButton = styled.button`
  padding: 10px;
  color: #fff;
  background-color: ${backgroundColor => {
    return backgroundColor;
  }};
  margin: 20px 40px;
  font-size: 22px;
  cursor: pointer;
`;
