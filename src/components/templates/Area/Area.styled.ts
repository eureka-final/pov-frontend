import styled from '@emotion/styled';

export const FullArea = styled.div<{ width?: number; height?: number }>`
  position: relative;
  width: ${({ width }) => (width ? `${width}px` : `100%`)};
  height: ${({ height }) => (height ? `${height}px` : `100%`)};
`;

export const ResponsiveArea = styled.div<{ width?: number; height?: number }>`
  height: ${({ height }) => (height ? `${height}px` : `100%`)};
  @media (min-width: 0px) and (max-width: 600px) {
    min-width: 360px;
    width: ${({ width }) => (width ? `${width}px` : `100%`)};
  }
  @media (min-width: 600px) {
    width: 1200px;
  }
`;
