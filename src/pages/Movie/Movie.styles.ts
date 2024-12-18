import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
`;

export const HomeContainer = styled.section`
  @media (min-width: 0px) and (max-width: 600px) {
    width: 100%;
  }

  @media (min-width: 600px) {
    width: calc(1200px - 32px * 2);
  }

  margin-top: 24px;
`;
