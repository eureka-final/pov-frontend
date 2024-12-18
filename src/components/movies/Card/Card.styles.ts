import styled from '@emotion/styled';

export const CardWapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  min-width: 150px;
  max-width: 170px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const Info = styled.div`
  display: flex;
  gap: 10px;
`;

export const Count = styled.span``;

export const MarginTop = styled.div`
  margin-top: 35px;
`;

export const LikeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px; /* 아이콘과 좋아요 수 사이 간격 */
  cursor: pointer;
`;