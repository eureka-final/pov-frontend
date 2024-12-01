import styled from '@emotion/styled';

export const ReviewListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 16px;
`;

export const CardContainer = styled.div`
  background-color: ${({ theme }) => theme.backgroundElevated};
  width: 100%;
  padding: 24px;
  gap: 16px;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

export const CardFlex = styled.div`
  display: flex;
  gap: 32px;
`;

export const Poster = styled.div`
  display: flex;
  flex-direction: column; 
  gap: 5px;
  align-items: center;
`;

export const ReviewCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;
`;

export const LikeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end	;
  gap: 8px; /* 아이콘과 좋아요 수 사이 간격 */
`;
