import styled from '@emotion/styled';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (min-width: 0px) and (max-width: 600px) {
    width: 100%;
    min-width: 148px;
  }

  @media (min-width: 600px) {
    width: 168px;
  }
`;
