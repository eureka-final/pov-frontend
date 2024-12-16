import styled from '@emotion/styled';
import { Body } from 'pov-design-system';

export const MyPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 600px) {
    padding: 0 192px;
  }
`;

export const Section = styled.section`
  margin-bottom: 48px;
`;

export const MemberInfoCard = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  width: 100%;
  padding: 32px 0;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.backgroundElevated};

  @media screen and (min-width: 0px) and (max-width: 600px) {
  }

  @media screen and (min-width: 600px) {
  }
`;

export const MemberInfoContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 16px;
`;

export const MemberInfoContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
`;

export const MemberInfoContentLabel = styled(Body)`
  width: 72px;
  color: ${({ theme }) => theme.teritary};
`;

export const MemberInfoContentText = styled(Body)`
  color: ${({ theme }) => theme.primary};
`;

export const PremiereCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 16px;

  width: 100%;
  padding: 32px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.backgroundElevated};

  @media screen and (min-width: 0px) and (max-width: 600px) {
  }

  @media screen and (min-width: 600px) {
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 24px;
  gap: 8px;
`;
