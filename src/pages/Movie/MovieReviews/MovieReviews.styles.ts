import styled from '@emotion/styled';

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  gap: 16px;
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const HeadingContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PaddedContainer = styled.div`
  @media (min-width: 0px) and (max-width: 600px) {
    padding: 0 24px;
  }

  @media (min-width: 600px) {
    padding: 0 76px;
  }
`;
