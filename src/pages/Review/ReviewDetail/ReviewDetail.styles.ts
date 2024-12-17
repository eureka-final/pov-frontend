import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
`;

export const HeaderContainer = styled.div<{ src: string }>`
  width: 100%;
  height: 480px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BackgroundLayer = styled.div<{ src: string }>`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: ${({ src }) => (src ? `url(${src})` : '#ffffff')};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  z-index: 1;
`;

export const TitleInfo = styled.div`
  display: flex;
  z-index: 20;
  text-align: center;
  @media (min-width: 0px) and (max-width: 600px) {
    left: 24px;
  }

  @media (min-width: 600px) {
    left: 76px;
  }
`;

export const ReviewInfo = styled.div`
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

export const Wrapper = styled.div`
  display: flex;
  gap: 25px;
  position: absolute;
  bottom: 35px;
  right: 54px;
  z-index: 10;
  cursor: pointer;
`;

export const Menu = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  white-space: nowrap;
`;

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Additionals = styled.div<{ justify?: string }>`
  display: flex;
  justify-content: ${({ justify }) => (justify ? `${justify}` : 'flex-start')};
  align-items: center;
  gap: 4px;
  cursor: pointer;
`;

export const Count = styled.span<{ color?: string }>`
  color: ${({ color }) => (color ? `${color}` : '#FFFFFF')};
`;

export const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  background: var(--Color-background-background-elevated, #4c494e);
  border-radius: 8px;
  padding: 20px;
`;

export const HeadingContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;


export const LikeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px; /* 아이콘과 좋아요 수 사이 간격 */
  color: ${({ theme }) => theme.color.green600};
`;