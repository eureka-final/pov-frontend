import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  margin-top: 1.6rem;
`;

export const Name = styled.span`
  margin-right: 40px;
`;
export const Keywords = styled.span`
  display: flex; /* Flexbox 사용 */
  flex-direction: column; /* 세로 방향 정렬 */
  gap: 10px;
`;

export const BadgeContainer = styled.span`
  display: flex; 
  gap: 8px; 
  cursor: pointer;
`;