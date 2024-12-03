import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  height: 480px;
  position: relative;
  background: url('https://s3-alpha-sig.figma.com/img/472e/ae15/f9f6158006f9a9a41457e6b4b6d6154e?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oTRHhPd9IUhqT~UvQ1cAGibItqIX~QP3qmoUvKRw45gi2Gf3cib6HeFLt32GBig2RDYo8xvUVz-Fg0jg78gwaWi6gl2GUmmhFHRGH-P7DW9cWCLDpCjku08nThf3L~-C-gOqL9CjS3322Drr9ZjtJk7GQZ2lMfZjnzF9RMXf~IzEGYOf-cRV-eFxe5GGhx0w2y~Fd32U7E8aIYODKefdq~GNMFVTb0Pr2Rkoi3bWr99Pr8oVEs4d-lvxrH8hn2M2uISXKd-1DBPQ1~yNp8RlNjtC-TlLuYWJN75XjnLJXJPagrjxVYGkgPxtVz5Co7t2CNrGyDB7BxRNf-EODwWw-A__');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100px;
    background: linear-gradient(#ededed 10%, #737373 50%);
    filter: blur(90px);
    pointer-events: none;
    z-index: 1;
  }
`;

export const HeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 55px;
  left: 24px;
  z-index: 10;
  gap: 16px;
`;

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const AdditionalsContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const Additionals = styled.div`
  display: flex;
  gap: 4px;
`;

export const Count = styled.span`
  color: #0de781;
`;

export const InfoContainer = styled.div``;

export const Box = styled.div<{ gap?: number }>`
  display: flex;
  gap: ${({ gap }) => (gap ? `${gap}px` : '8px')};
`;

export const Wrapper = styled.div<{ gap?: number }>`
  display: flex;
  gap: ${({ gap }) => (gap ? `${gap}px` : '8px')};
`;

export const ReviewContainer = styled.div``;

export const DirectingContainer = styled.div``;

export const ImageContainer = styled.div``;
