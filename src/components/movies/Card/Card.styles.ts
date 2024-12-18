import styled from '@emotion/styled';
import { Heading } from 'pov-design-system';

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const CardWapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  min-width: 150px;
  max-width: 170px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 24px;

  @media (min-width: 0px) and (max-width: 600px) {
    width: 100%;
    min-width: 148px;
  }

  @media (min-width: 600px) {
    min-width: 168px;
    width: 100%;
  }
`;

export const SingleLineHeading = styled(Heading)`
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 100%; /* 부모 요소에 따라 너비 조정 */
`;

export const ThumbnailImage = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 8px;
  aspect-ratio: 9 / 15;

  @media (min-width: 0px) and (max-width: 600px) {
    max-height: 380px;
  }

  @media (min-width: 600px) {
    width: 100%;
    /* height: 380px; */
  }
`;

export const Info = styled.div`
  margin-top: 4px;
  display: flex;
  gap: 20px;
`;

export const Count = styled.span``;

export const MarginTop = styled.div`
  margin-top: 35px;
`;

export const LikeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px; /* 아이콘과 좋아요 수 사이 간격 */
`;
