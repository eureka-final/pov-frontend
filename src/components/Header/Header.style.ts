import styled from '@emotion/styled';

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  position: sticky;

  @media screen and (min-width: 0px) and (max-width: 600px) {
    padding-top: 32px;
    padding-bottom: 24px;
    align-items: start;
  }

  @media screen and (min-width: 600px) {
    padding-top: 32px;
    padding-bottom: 24px;
    align-items: center;
  }
`;

export const LeftWrapper = styled.div`
  display: flex;
  justify-content: start;

  @media screen and (min-width: 0px) and (max-width: 600px) {
    flex-direction: column;
    align-items: start;
    gap: 16px;
  }

  @media screen and (min-width: 600px) {
    flex-direction: row;
    align-items: center;
    gap: 48px;
  }
`;

export const RightWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  gap: 16px;
`;

export const LogoItem = styled.div`
  cursor: pointer;
  transition:
    transform 0.3s ease,
    color 0.3s ease; /* 애니메이션 효과 */
  &:hover {
    transform: scale(1.05); /* 크기 확대 */
  }
`;

export const NoticeButton = styled.div``;

export const LoginButton = styled.div`
  color: ${({ theme }) => theme.secondary};
  cursor: pointer;
`;

export const FlexWrapper = styled.span`
  display: flex;
  align-items: center;
  gap: 8px; 
`;