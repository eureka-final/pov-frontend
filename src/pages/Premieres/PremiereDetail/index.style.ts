/* section, wrapper */
import styled from '@emotion/styled';

export const PremiereContentSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 24px 0 48px 0;

  @media screen and (min-width: 0px) and (max-width: 600px) {
    padding: 24px;
  }
`;

export const PremiereBodyImage = styled.img`
  margin-bottom: 48px;
  object-fit: cover;

  @media screen and (min-width: 0px) and (max-width: 600px) {
    width: 100%;
  }

  @media screen and (min-width: 600px) {
    width: 720px;
  }
`;
