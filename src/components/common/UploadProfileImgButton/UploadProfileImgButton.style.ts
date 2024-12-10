import styled from '@emotion/styled';

export const UploadProfileImgButtonContainer = styled.div`
  position: relative;
  width: 160px;
  height: 160px;
`;

export const UploadImgButton = styled.div`
  position: absolute;
  right: 12px;
  bottom: 12px;

  width: 24px;
  height: 24px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 40px;
  background: ${({ theme }) => theme.color.white};
`;
