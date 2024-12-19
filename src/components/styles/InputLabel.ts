import styled from '@emotion/styled';
import { css } from '@emotion/react';
export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2rem;
  gap: 26px;
`;

export const Label = styled.div`
  flex: 0 0 6%; /* Label의 고정 너비 */
  text-align: left;
  margin-right: 20px;
  white-space: nowrap;
`;

export const Keywords = styled.span`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const BadgeContainer = styled.span`
  display: flex; 
  gap: 8px; 
  cursor: pointer;
`;

export const inputStyling = css({
  width: '880px',
});