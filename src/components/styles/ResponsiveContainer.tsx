import { ReactNode } from 'react';
import styled from '@emotion/styled';

const Container = styled.div<{ gap?: number; mobDirection?: string; pcDirection?: string; minMobile?: number; minPC?: number }>`
  display: flex;
  gap: ${({ gap }) => (gap ? `${gap}px` : '8px')};

  @media (max-width: 600px) {
    min-width: ${({ minMobile }) => (minMobile ? `${minMobile}px` : '0')};
    flex-direction: ${({ mobDirection }) => mobDirection || 'row'};
  }

  @media (min-width: 600px) {
    flex-direction: ${({ pcDirection }) => pcDirection || 'row'};
    min-width: ${({ minPC }) => (minPC ? `${minPC}px` : '0')};
  }
`;

interface ContainerProps {
  children: ReactNode;
  gap?: number;
  mobDirection?: string;
  pcDirection?: string;
  minMobile?: number;
  minPC?: number;
}

const ResponsiveContainer = ({ children, gap, mobDirection, pcDirection, minMobile, minPC }: ContainerProps) => {
  return (
    <Container gap={gap} mobDirection={mobDirection} pcDirection={pcDirection} minMobile={minMobile} minPC={minPC}>
      {children}
    </Container>
  );
};

export default ResponsiveContainer;
