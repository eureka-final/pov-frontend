import styled from '@emotion/styled';

export const AlarmCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 80px;
  padding: 0 24px;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.backgroundElevated};
`;

export const AlarmTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 4px;
`;

export const TimeText = styled.div`
  color: ${({ theme }) => theme.teritary};
`;
