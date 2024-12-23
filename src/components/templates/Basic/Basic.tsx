import { ReactNode } from 'react';
import { Container } from '@/components/templates/Basic/Basic.styled';

interface BasicProps {
  children: ReactNode;
}

const Basic = ({ children }: BasicProps) => {
  return <Container>{children}</Container>;
};

export default Basic;
