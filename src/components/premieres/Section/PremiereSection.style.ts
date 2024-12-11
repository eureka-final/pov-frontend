import styled from '@emotion/styled';

export const Section = styled.section`
  display: grid;
  padding: 24px 0;

  @media (min-width: 0px) and (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  @media (min-width: 600px) {
    grid-template-columns: repeat(6, 1fr);
    gap: 24px;
  }
`;
