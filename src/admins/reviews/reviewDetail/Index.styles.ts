import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  height: calc(100vh - 100px);
  overflow-y: auto;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const CardContainer = styled.div`
  background-color: ${({ theme }) => theme.backgroundElevated};
  width: 100%;
  padding: 24px;
  gap: 16px;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

export const Info = styled.div`
  display: flex;
  gap: 32px;
`;

export const ReviewCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;
`;

export const Buttons = styled.div`
  margin-top: 200px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Poster = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
  text-align: center;
`;

export const FlexBetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 12%;
`;

export const LikeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px; /* 아이콘과 좋아요 수 사이 간격 */
  color: ${({ theme }) => theme.color.green600};
`;
