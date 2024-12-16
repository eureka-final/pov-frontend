import styled from '@emotion/styled';

export const Section = styled.div`
  @media (min-width: 600px) {
    padding: 0 192px;
  }
`;

export const AlarmCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const AlarmCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 8px;

  width: 100%;
  height: 80px;
  padding: 0 24px;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.backgroundElevated};
`;

export const TimeText = styled.div`
  color: ${({ theme }) => theme.teritary};
`;

export const NoContentsContainer = styled(AlarmCardContainer)`
  align-items: center;
  gap: 16px;
  color: ${({ theme }) => theme.teritary};
`;
