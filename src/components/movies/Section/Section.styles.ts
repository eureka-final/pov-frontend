import styled from '@emotion/styled';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  margin-bottom: 48px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  overflow-x: auto;
  @media (min-width: 0px) and (max-width: 600px) {
    gap: 16px;
  }

  @media (min-width: 600px) {
    width: 100%;
    gap: 24px;
  }
`;