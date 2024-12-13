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

export const ThumbnailImage = styled.img`
  width: 100%;
  aspect-ratio: '3 / 4';
  object-fit: cover;
  border-radius: 4px;
`;
