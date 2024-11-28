import styled from '@emotion/styled';

export const HeadingContainer = styled.div`
  margin-bottom: 20px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  gap: 70px;
`;

export const Vs = styled.div`
  margin-top: 40px;
`;

export const Item = styled.div<{ isSelected: boolean }>`
  display: flex; /* Flexbox 사용 */
  flex-direction: column; /* 세로 방향 정렬 */
  align-items: center; /* 수직 가운데 정렬 */
  gap: 10px; /* 아이템 간 간격 */
  cursor: pointer;
  transition: transform 0.3s ease, color 0.3s ease; /* 애니메이션 효과 */
  color: ${({ isSelected, theme }) =>
    isSelected ? theme.color.green600 : theme.primary};
  &:hover {
    transform: scale(1.1); /* 크기 확대 */
    color: ${({ theme }) => theme.color.green600};
  }
`;
