import styled from '@emotion/styled';


export const PaymentLogCardContainer = styled.div`
  gap: 16px; /* 카드 간격 */
  margin-top: 16px;
  
  @media (min-width: 0px) and (max-width: 600px) {
    display: flex;
    padding-bottom: 48px;
    flex-direction: column;
  }

  @media (min-width: 600px) {
    
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: 64px;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  border-radius: 8px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.backgroundElevated};
  
  @media (min-width: 0px) and (max-width: 600px) {
    width: 100%;
    min-width: 148px;
    margin-left: 50px;
  }

  @media (min-width: 600px) {
    width: 100%;
  }
`;
