import styled from '@emotion/styled';

const Layer = styled.img<{ MobileHeight?: number; PcHeight?: number; br: string }>`
  width: 100%;
  border-radius: ${({ br }) => (br ? `${br}` : `4px`)};
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
    url: string | undefined;
    MobileHeight: number;
    PcHeight: number;
    br: string;
  };
}

const ImageLayer = ({ src }: LayerProps) => {
  return <Layer src={src.url} MobileHeight={src.MobileHeight} PcHeight={src.PcHeight} br={src.br} />;
};

export default ImageLayer;
