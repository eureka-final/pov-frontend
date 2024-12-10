import styled from '@emotion/styled';

/* section, wrapper */
export const SignUpSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 0px) and (max-width: 600px) {
    padding-top: 24px;
  }

  @media screen and (min-width: 600px) {
    width: 520px;
    padding: 48px 52px;
    margin: 72px 344px;

    border-radius: 8px;
    background-color: ${({ theme }) => theme.backgroundElevated};
  }
`;

export const SignUpSectionHeader = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  gap: 16px;
  @media screen and (min-width: 0px) and (max-width: 600px) {
    margin-top: 32px;
    margin-bottom: 80px;
  }

  @media screen and (min-width: 600px) {
    margin-bottom: 32px;
  }
`;

export const SignUpSectionBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-bottom: 32px;
`;

export const ButtonContainer = styled.div`
  width: 100%;

  @media screen and (min-width: 0px) and (max-width: 600px) {
    position: absolute;
    width: calc(100% - 48px);
    bottom: 64px;
    left: 24px;
  }
`;
