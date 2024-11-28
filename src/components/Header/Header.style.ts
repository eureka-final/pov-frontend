import styled from '@emotion/styled';

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 0px) and (max-width: 600px) {
    padding-top: 24px;
    padding-bottom: 16px;
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
    align-items: end;
    gap: 48px;
  }
`;
