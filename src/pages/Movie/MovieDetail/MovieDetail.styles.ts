import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
`;

export const HeaderContainer = styled.div<{ src: string }>`
  width: 100%;
  height: 480px;
  position: relative;
`;

export const BackgroundLayer = styled.div<{ src: string }>`
  width: 100%;
  height: 100%;
  position: absolute;
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

export const Additionals = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

export const Count = styled.span<{ color?: string }>`
  color: ${({ color }) => (color ? `${color}` : '#FFFFFF')};
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px 20px;
  margin-top: 24px;
  border-radius: 8px;
  background: var(--Color-background-background-elevated, #4c494e);
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

export const ReviewContainer = styled.div`
  margin-top: 12px;
`;

export const DirectingContainer = styled.div``;

export const ImageContainer = styled.div``;
