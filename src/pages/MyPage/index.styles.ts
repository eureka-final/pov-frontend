import styled from '@emotion/styled';
import { Body } from 'pov-design-system';

export const MyPageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Section = styled.section`
  margin-bottom: 48px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
    width: 100%;
  }

  @media screen and (min-width: 600px) {
    width: calc(1200px - (32px + 192px) * 2);
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

export const PremiereHeaderSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  @media screen and (min-width: 0px) and (max-width: 600px) {
    width: 100%;
  }

  @media screen and (min-width: 600px) {
    width: calc(1200px - (32px + 192px) * 2);
  }
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
