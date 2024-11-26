import { ReactNode } from 'react';
import { Container } from './Basic.styled';

interface PaddedProps {
  children: ReactNode;
}

const Padded = ({ children }: PaddedProps) => {
  return <Container>{children}</Container>;
};

export default Padded;
