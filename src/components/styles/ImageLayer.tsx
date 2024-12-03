import styled from '@emotion/styled';

const Layer = styled.img<{ MobileHeight?: number; PcHeight?: number }>`
  width: 100%;
  border-radius: 4px;
  @media (min-width: 0px) and (max-width: 600px) {
    height: ${({ MobileHeight }) => (MobileHeight ? `${MobileHeight}px` : `100%`)};
  }

  @media (min-width: 600px) {
    height: ${({ PcHeight }) => (PcHeight ? `${PcHeight}px` : `100%`)};
  }
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

interface LayerProps {
  src: {
    url: string;
    MobileHeight: number;
    PcHeight: number;
  };
}

const ImageLayer = ({ src }: LayerProps) => {
  return <Layer src={src.url} MobileHeight={src.MobileHeight} PcHeight={src.PcHeight} />;
};

export default ImageLayer;
