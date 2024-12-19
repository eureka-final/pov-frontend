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
  width: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Input = styled.div`
  display: flex;
  width: 100%;
  padding: 20px;
  border-radius: 8px;
  color: #ffffff;
  background: var(--color-base-faint, #676668);
  align-items: center;
`;

export const Badges = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 10px;
`;

export const ButtonContainer = styled.div`
  margin-top: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
