import { ReactNode } from 'react';
import { ResponsiveArea } from './Area.styled';
import useWindowSize from '../../../hooks/utils/useWindowSize';

interface AreaProps {
  children: ReactNode;
}

const Area = ({ children }: AreaProps) => {
  const windowSize = useWindowSize();

  return (
    <ResponsiveArea width={windowSize.width} height={windowSize.height}>
      {children}
    </ResponsiveArea>
  );
};

export default Area;
