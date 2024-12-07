import styled from '@emotion/styled';

export const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  background: var(--Color-background-background-elevated, #4c494e);
  border-radius: 8px;
  padding: 20px;
  /* @media (min-width: 0px) and (max-width: 600px) {
    min-height: 125px;
  }

  @media (min-width: 600px) {
    min-height: 200px;
  } */
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Additionals = styled.div<{ justify?: string }>`
  display: flex;
  justify-content: ${({ justify }) => (justify ? `${justify}` : 'flex-start')};
  align-items: center;
  gap: 4px;
  cursor: pointer;
`;

export const Count = styled.span<{ color?: string }>`
  color: ${({ color }) => (color ? `${color}` : '#FFFFFF')};
`;

export const Content = styled.div`
  color: var(--Color-base-secondary, #e5e5e5);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22.4px;
`;
