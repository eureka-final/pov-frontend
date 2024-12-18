import styled from '@emotion/styled';

export const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  margin-bottom: 48px;

  &:last-child {
    margin-bottom: 0;
  }
`;

// export const CardContainer = styled.div`
//   display: flex;
//   overflow-x: auto;
//   @media (min-width: 0px) and (max-width: 600px) {
//     gap: 16px;
//   }

//   @media (min-width: 600px) {
//     width: 100%;
//     gap: 24px;
//   }
// `;

export const CardContainer = styled.section`
  display: grid;
  margin-bottom: 30px;
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