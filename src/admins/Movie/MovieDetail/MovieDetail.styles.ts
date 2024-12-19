import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  height: calc(100vh - 100px);
  overflow-y: auto;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Card = styled.div`
  padding: 48px;
  background: #4c494e;
  border-radius: 8px;
`;

export const InfoContainer = styled.div`
  display: flex;
  gap: 58px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Wrapper = styled.div`
  display: flex;
`;

export const Buttons = styled.div`
  display: flex;
  position: relative;
  gap: 25px;
  padding: 50px 40px;

  &::after {
    position: absolute;
    content: '';
    height: 1px;
    width: 100%;
    background: #676668;
    left: 0;
    bottom: 0;
  }
`;

export const ImageContainer = styled.div`
  margin-top: 55px;
`;

export const HeadingContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  overflow-y: auto;
  gap: 8px;
  width: 100%;
`;

export const Layer = styled.div`
  display: flex;
  width: 100%;
  height: 64px;
  border-radius: 8px;
  padding: 0 16px;
  color: #ffffff;
  background: var(--color-base-faint, #676668);
  align-items: center;
  justify-content: space-between;
`;
