import styled from '@emotion/styled';

/* section, wrapper */
export const SignInSection = styled.section`
  @media screen and (min-width: 0px) and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 24px;
  }

  @media screen and (min-width: 600px) {
    width: 440px;
    padding: 48px 64px;
    margin: 72px 344px;

    border-radius: 8px;
    background-color: ${({ theme }) => theme.backgroundElevated};
  }
`;

export const SignInSectionHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  gap: 16px;
  @media screen and (min-width: 0px) and (max-width: 600px) {
    margin: 40px 0;
  }

  @media screen and (min-width: 600px) {
    margin-bottom: 40px;
  }
`;

export const SignInButtonWrapper = styled.div`
  @media screen and (min-width: 0px) and (max-width: 600px) {
    margin-top: 200px;
  }
`;

/* button */
export const OAuthSignInButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;

  height: 54px;
  padding: 16px 20px;
  margin-bottom: 16px;
  border-radius: 8px;

  @media screen and (min-width: 0px) and (max-width: 600px) {
    width: 100%;
  }

  @media screen and (min-width: 600px) {
    width: 312px;
  }
`;

export const NaverSignInButton = styled(OAuthSignInButton)`
  background: #03c75a;
  color: #fff;

  &:hover {
    background: #00d75f;
  }

  &:active {
    background: #01be55;
  }
`;

export const GoogleSignInButton = styled(OAuthSignInButton)`
  background: #f2f2f2;
  background: ${({ theme }) => theme.secondary};
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);

  &:hover {
    background: #ffffff;
  }

  &:active {
    background: #e4e4e4;
  }
`;
