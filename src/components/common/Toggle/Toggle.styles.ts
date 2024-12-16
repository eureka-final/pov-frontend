import styled from '@emotion/styled';
import { Body } from 'pov-design-system';

export const ToggleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
`;

export const Label = styled(Body)`
  color: ${({ theme }) => theme.teritary};
`;
