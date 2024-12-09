import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { themes } from 'pov-design-system';

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
  background: ${({ src }) => (src ? `url(${src})` : '#ffffff')};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  z-index: 10;
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


export const Additionals = styled.div<{ justify?: string }>`
  display: flex;
  justify-content: ${({ justify }) => (justify ? `${justify}` : 'flex-start')};
  align-items: center;
  gap: 4px;
  cursor: pointer;
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

export const Section = styled.div`
  gap: 10px;
  margin-bottom: 46px;
`;

export const SectionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SectionHeading = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;
`;

export const numberStyling = css({
  color: themes.dark.color.green600,
});
