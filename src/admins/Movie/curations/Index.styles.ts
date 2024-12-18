import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  height: calc(100vh - 100px);
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  overflow-y: auto;
  height: calc(100% - 96px);
`;

export const Card = styled.div`
  padding: 48px;
  background: #4c494e;
  border-radius: 8px;
  height: calc(100% - 73px);
`;

export const Input = styled.input`
  display: flex;
  width: 100%;
  height: 48px;
  border-radius: 8px;
  padding: 0 16px;
  color: #ffffff;
  background: var(--color-base-faint, #676668);
  align-items: center;
  &::placeholder {
    color: #ffffff;
  }
`;

export const Item = styled.div`
  position: relative;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
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
