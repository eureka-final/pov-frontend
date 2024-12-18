import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
`;

export const HeaderContainer = styled.div<{ src: string }>`
  width: 100%;
  height: 480px;
  position: relative;
`;

export const PaddedContainer = styled.div`
  @media (min-width: 0px) and (max-width: 600px) {
    padding: 0 24px;
  }

  @media (min-width: 600px) {
    padding: 0 76px;
  }
`;

export const BackgroundLayer = styled.div<{ src: string }>`
  width: 100%;
  height: 480px;
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
  left: 24px;
  z-index: 20;
  gap: 16px;
  @media (min-width: 0px) and (max-width: 600px) {
    left: 24px;
  }

  @media (min-width: 600px) {
    left: 76px;
  }
`;

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const AdditionalsContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const Additionals = styled.div<{ justify?: string }>`
  display: flex;
  justify-content: ${({ justify }) => (justify ? `${justify}` : 'flex-start')};
  align-items: center;
  cursor: pointer;
  gap: 10px;
  white-space: nowrap;
`;

export const LikeContainer = styled.div<{ justify?: string }>`
  display: flex;
  justify-content: ${({ justify }) => (justify ? `${justify}` : 'flex-start')};
  align-items: center;
  gap: 8px;
  cursor: pointer;
  color: ${({ theme }) => theme.color.green600};
`;

export const Count = styled.span`
  
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px 20px;
  margin-top: 24px;
  border-radius: 8px;
  background: ${({ theme }) => theme.backgroundElevated};
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 16px;
  }

  @media (min-width: 600px) {
    flex-direction: row;
    gap: 42px;
    padding: 24px 240px;
  }
`;

export const Wrapper = styled.div<{ gap?: number; direction?: string; width?: number }>`
  display: flex;
  gap: ${({ gap }) => (gap ? `${gap}px` : '8px')};
  flex-direction: ${({ direction }) => direction || 'row'};
  width: ${({ width }) => (width ? `${width}px` : `100%`)};
`;


export const ParagraphWrapper = styled.div`
  width: 200%;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  gap: 16px;
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

export const ImageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 46px;
`;

export const ScrollContainer = styled.div`
  display: flex;
  overflow-x: auto;
  @media (min-width: 0px) and (max-width: 600px) {
    gap: 16px;
  }

  @media (min-width: 600px) {
    width: 100%;
    gap: 24px;
  }
`;
