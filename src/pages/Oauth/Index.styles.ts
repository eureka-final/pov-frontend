/* section, wrapper */
import styled from '@emotion/styled';

export const LoadingSection = styled.section`
  width: 100%;
  height: calc(100svh - 160px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 20px;
  margin: 12px;
`;

export const ModalBodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 4px;
  color: ${({ theme }) => theme.teritary};
`;
