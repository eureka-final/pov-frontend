import styled from '@emotion/styled';
import { Body } from 'pov-design-system';

export const ReviewListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 16px;
`;

export const ClubContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 16px;
`;

export const ClubReviewListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px; /* 카드 간격 */
  margin-top: 16px;
`;

export const CardContainer = styled.div`
  background-color: ${({ theme }) => theme.backgroundElevated};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 32px;
  gap: 16px;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

export const ClubItem = styled.div`
  transition:
    transform 0.3s ease,
    color 0.3s ease; /* 애니메이션 효과 */
  &:hover {
    transform: scale(1.1); /* 크기 확대 */
  }
`;

export const CardFlex = styled.div`
  display: flex;
  gap: 24px;
`;

export const FlexWrapper = styled.span`
  display: flex;
  margin-top: 16px;
  gap: 8px;
  color: ${({ theme }) => theme.secondary};
`;

export const Poster = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
`;

export const ReviewCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
`;

export const FlexBetween = styled.div`
  margin-top: 12px;
  display: flex;
  justify-content: end;
`;

export const LikeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px; /* 아이콘과 좋아요 수 사이 간격 */
  color: ${({ theme }) => theme.color.green600};
  font-size: 14px;
`;

export const Spoiler = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  color: ${({ theme }) => theme.teritary};
`;

export const SpoMore = styled.div`
  color: ${({ theme }) => theme.color.green600};
`;

export const ReadMore = styled.div`
  color: ${({ theme }) => theme.color.gray400};
`;

export const TitleInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15%;
`;

export const WordWrapText = styled(Body)`
  display: block;
  width: 100%; /* 부모 요소에 따라 너비 조정 */
  word-break: keep-all; /* 한글 단어 단위 줄바꿈 */
  overflow-wrap: break-word; /* 영단어 줄바꿈 */
  white-space: normal; /* 텍스트가 정상적으로 줄바꿈되도록 설정 */
`;
