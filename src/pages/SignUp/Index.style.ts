import styled from '@emotion/styled';

/* section, wrapper */
export const SignUpSection = styled.section`
  @media screen and (min-width: 0px) and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 24px;
    gap: 24px;
  }

  @media screen and (min-width: 600px) {
    width: 440px;
    padding: 48px 64px;
    margin: 72px 344px;
    gap: 24px;

    border-radius: 8px;
    background-color: ${({ theme }) => theme.backgroundElevated};
  }
`;

export const SignUpSectionHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  gap: 8px;
  @media screen and (min-width: 0px) and (max-width: 600px) {
    margin: 40px 0;
  }

  @media screen and (min-width: 600px) {
    margin-bottom: 40px;
  }
`;

export const SignUpSectionBody = styled.div`
  margin-bottom: 24px;
`;
