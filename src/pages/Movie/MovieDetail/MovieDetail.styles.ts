import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  padding-bottom: 40px;
`;

export const HeaderContainer = styled.div<{ src: string }>`
  width: 100%;
  height: 480px;
  position: relative;
`;

export const PaddedContainer = styled.div`
  width: 100%;

  @media (min-width: 600px) {
    width: calc(1200px - 72px);
  }
`;

export const BackgroundLayer = styled.div<{ src: string }>`
  width: 100%;
  height: 520px;
  position: absolute;
  top: 0;
  left: 0;
  background: ${({ src }) => (src ? `url(${src})` : '#ffffff')};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  z-index: 10;
`;

export const HeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 55px;
  /* left: 24px; */
  z-index: 20;
  gap: 16px;
  /* @media (min-width: 0px) and (max-width: 600px) {
    left: 24px;
  }

  @media (min-width: 600px) {
    left: 76px;
  } */
`;

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const BadgeWrapper = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 20px;
`;

export const AdditionalsContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 8px;
`;

export const Additionals = styled.div<{ justify?: string }>`
  display: flex;
  justify-content: ${({ justify }) => (justify ? `${justify}` : 'flex-start')};
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;

export const Count = styled.div<{ color?: string }>`
  font-size: 14px;
  font-weight: 500;
`;

export const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: start;

  padding: 32px 24px;
  margin-top: 24px;
  border-radius: 8px;
  background: ${({ theme }) => theme.backgroundElevated};

  @media (min-width: 0px) and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }

  @media (min-width: 600px) {
    flex-direction: row;
    align-items: start;
    gap: 42px;
    padding: 40px 48px;
  }
`;

export const Wrapper = styled.div<{ gap?: number; direction?: string; width?: number }>`
  display: flex;
  gap: ${({ gap }) => (gap ? `${gap}px` : '8px')};
  flex-direction: ${({ direction }) => direction || 'row'};
  width: ${({ width }) => (width ? `${width}px` : `100%`)};
`;

export const LikeContainer = styled.div<{ justify?: string }>`
  display: flex;
  justify-content: ${({ justify }) => (justify ? `${justify}` : 'flex-start')};
  align-items: center;
  gap: 8px;
  cursor: pointer;
  color: ${({ theme }) => theme.color.green600};
  font-size: 14px;
  font-weight: 600;
`;

export const Section = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  margin: 24px 0;
  gap: 16px;

  @media (min-width: 600px) {
    margin: 32px 0;
  }
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  background: ${({ theme }) => theme.backgroundElevated};
  border-radius: 8px;
  padding: 20px;
`;

export const HeadingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;

export const ProductionGridContainer = styled.div`
  display: grid;
  gap: 64px;
  margin-bottom: 48px;

  @media (min-width: 0px) and (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 600px) {
    width: 100%;
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const ImageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 46px;
`;

export const ScrollContainer = styled.div`
  display: grid;

  overflow-x: auto;
  @media (min-width: 0px) and (max-width: 600px) {
    gap: 16px;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 600px) {
    width: 100%;
    gap: 24px;
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const StillCutImage = styled.img`
  width: 100%;
  aspect-ratio: 16 /9;
  object-fit: cover;
  border-radius: 4px;
`;

export const PosterImg = styled.img`
  @media (min-width: 0px) and (max-width: 600px) {
    width: 52%;
  }

  @media (min-width: 600px) {
    width: 240px;
  }
  border-radius: 4px;
`;
