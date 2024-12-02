import styled from '@emotion/styled';

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

export const Wrapper = styled.header`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const LogoItem = styled.div`
  cursor: pointer;
  transition: transform 0.3s ease, color 0.3s ease; /* 애니메이션 효과 */
  &:hover {
    transform: scale(1.1); /* 크기 확대 */
  }
`;