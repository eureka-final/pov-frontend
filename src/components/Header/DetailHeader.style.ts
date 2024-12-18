import styled from '@emotion/styled';

export const DetailHeaderWrapper = styled.header`
  @media screen and (min-width: 0px) and (max-width: 600px) {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 32px 0px 16px 0px;
    z-index: 20;
  }
`;

export const IconContainer = styled.div`
  position: absolute;
  width: 16px;
  height: 16px;
  top: 32px;
  left: 0px;
  color: ${({ theme }) => theme.primary};
`;
