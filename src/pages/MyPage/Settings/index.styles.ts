import styled from '@emotion/styled';
import { Heading, Body, Paragraph } from 'pov-design-system';

export const Section = styled.section`
  margin-top: 32px;
  @media (min-width: 600px) {
    padding: 0 240px;
  }
`;

export const Header = styled(Heading)`
  margin-bottom: 32px;
`;

export const Label = styled(Body)`
  color: ${({ theme }) => theme.teritary};
`;

export const RowWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const ToggleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  gap: 16px;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  /* margin-top: 24px; */
  gap: 8px;
`;

export const TextButton = styled(Body)`
  cursor: pointer;
`;

export const WordWrapText = styled(Paragraph)`
  display: block;
  width: 100%; /* 부모 요소에 따라 너비 조정 */
  word-break: keep-all; /* 한글 단어 단위 줄바꿈 */
  overflow-wrap: break-word; /* 영단어 줄바꿈 */
  white-space: pre-line; /* 텍스트가 정상적으로 줄바꿈되도록 설정 */
  color: ${({ theme }) => theme.teritary};
  margin-bottom: 16px;
`;

export const ModalContentWrapper = styled.div`
  padding: 16px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 16px;
`;
