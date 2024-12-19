import styled from '@emotion/styled';

export const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  background: ${({ theme }) => theme.backgroundElevated};
  border-radius: 8px;
  padding: 20px;
  cursor: pointer;
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
`;

export const Content = styled.div`
  background: ${({ theme }) => theme.secondary};
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22.4px;
`;

export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
