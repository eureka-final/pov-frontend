import styled from '@emotion/styled';

export const Container = styled.div`
  margin-bottom: 1em;
  padding: 0.5em;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.backgroundElevated};
  color: ${({ theme }) => theme.secondary};
`;

export const Name = styled.span`
  font-size: 16px;
  margin-left: 8px;
`;
