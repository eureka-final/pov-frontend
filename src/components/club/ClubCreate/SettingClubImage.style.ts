import styled from '@emotion/styled';

export const HiddenInput = styled.input`
  display: none;
`;

export const UploadButton = styled.img`
  cursor: pointer;
  margin-bottom: 20px;
`;

export const ImageBox = styled.div`
  width: 90%;
  height: 70%;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  margin: 0 auto;
`;

export const PreviewImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;