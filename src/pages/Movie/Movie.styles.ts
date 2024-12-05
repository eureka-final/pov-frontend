import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
`;

export const InputContainer = styled.div`
  margin: 24px 0;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 5px;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #007bff;
  }
`;
