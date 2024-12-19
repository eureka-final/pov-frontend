import styled from '@emotion/styled';

export const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 16px;

  @media screen and (min-width: 600px) {
    width: calc(1200px - (32px + 192px) * 2);
  }
`;

export const NoContentsContainer = styled.div`
  width: 100%;
  height: 320px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;

  @media screen and (min-width: 600px) {
    width: calc(1200px - (32px + 192px) * 2);
  }
  width: 100%;
  height: 124px;
  padding: 0 24px;
  margin-top: 16px;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.backgroundElevated};
  color: ${({ theme }) => theme.teritary};
`;
