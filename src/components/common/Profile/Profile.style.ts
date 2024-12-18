import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 0.5em;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const HeaderName = styled.span`
  font-size: 16px;
  margin-left: 8px;
  font-weight: 500;
  color: ${({ theme }) => theme.secondary};
`;

export const Name = styled.span`
  font-size: 14px;
  margin-left: 8px;
  font-weight: 500;
  color: ${({ theme }) => theme.secondary};
`;
