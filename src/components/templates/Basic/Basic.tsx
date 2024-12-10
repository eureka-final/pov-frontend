import { ReactNode } from 'react';
import { Container } from './Basic.styled';

interface BasicProps {
  children: ReactNode;
}

const Basic = ({ children }: BasicProps) => {
  return <Container>{children}</Container>;
};

export default Basic;
