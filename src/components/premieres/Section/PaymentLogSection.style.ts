import styled from '@emotion/styled';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 16px;

  @media (min-width: 0px) and (max-width: 600px) {
    gap: 8px;
  }

  @media (min-width: 600px) {
    gap: 16px;
  }
`;

export const NoContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;

  width: 100%;
  height: 80px;
  padding: 0 24px;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.backgroundElevated};
  color: ${({ theme }) => theme.teritary};
`;
