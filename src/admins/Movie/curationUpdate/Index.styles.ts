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

export const Input = styled.input`
  display: flex;
  width: 100%;
  height: 64px;
  border-radius: 8px;
  padding: 0 16px;
  color: #ffffff;
  background: var(--color-base-faint, #676668);
  align-items: center;
`;

export const ModalContainer = styled.div`
  width: 500px;
  height: 400px;
`;

export const ModalInput = styled.input`
  display: flex;
  width: 100%;
  height: 40px;
  border-radius: 8px;
  margin-top: 10px;
  padding: 0 16px;
  color: #ffffff;
  background: var(--color-base-faint, #676668);
  align-items: center;
  &::placeholder {
    color: #ffffff;
  }
`;

export const ModalItem = styled.div<{ isSelected: boolean }>`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px;
  border-radius: 8px;
  background: var(--color-base-faint, #676668);
  background: ${({ isSelected }) => (isSelected ? 'var(--color-primary, #ADACAF)' : 'var(--color-base-faint, #676668)')};
  color: ${({ isSelected }) => (isSelected ? '#FFF' : '#FFF')};
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

export const MovieButton = styled.button`
  display: flex;
  height: 64px;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: transparent;
  color: #858386;
  border-radius: 8px;
  border: 2px dashed var(--color-base-faint, #676668);
  cursor: pointer;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  overflow-y: auto;
  gap: 8px;
  width: 100%;
  height: 310px;
`;

export const Item = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 20px;
  border-radius: 8px;
  background: var(--color-base-faint, #676668);
`;

export const MovieList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  overflow-y: auto;
  gap: 8px;
  width: 100%;
`;

export const MovieItem = styled.div`
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
