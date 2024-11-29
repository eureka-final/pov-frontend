import styled from '@emotion/styled';

export const Card = styled.div`
  background-color: ${({ theme }) => theme.backgroundElevated};
  width: 100%;
  padding: 24px;
  gap: 32px;
`;

export const Poster = styled.div`
  width: 200px;
  height: auto;
  flex-shrink: 0;
  border-radius: 10px;
  margin-right: 10px;
`;