import styled from '@emotion/styled';
import { Heading, Body } from 'pov-design-system';

export const Section = styled.section`
  margin-top: 32px;
  @media (min-width: 600px) {
    padding: 0 240px;
  }
`;

export const Header = styled(Heading)`
  margin-bottom: 32px;
`;

export const Label = styled(Body)`
  color: ${({ theme }) => theme.teritary};
`;

export const RowWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const ToggleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  gap: 16px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  /* margin-top: 24px; */
  gap: 8px;
`;

export const TextButton = styled(Body)`
  cursor: pointer;
`;
