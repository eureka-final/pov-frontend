import { ReactNode } from 'react';
import { Container } from '@/components/templates/Padded/Padded.styled';

interface PaddedProps {
  children: ReactNode;
}

const Padded = ({ children }: PaddedProps) => {
  return <Container>{children}</Container>;
};

export default Padded;
