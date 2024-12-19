import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
`;

export const BadgeWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

export const ClubBtn = styled.div`
  color: ${({ theme }) => theme.teritary};
  cursor: pointer;
  margin-bottom: 6px;
`;
