import { useNavigate } from 'react-router-dom';

import { useTheme } from '@emotion/react';
import { Heading, Body } from 'pov-design-system';

import { Card } from '@/components/premieres/Card/PaymentLogCard.style';
import type { PremiereEntry } from '@/types/premiere';

const PaymentLogCard = (props: PremiereEntry) => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <>
      <Card onClick={() => navigate(`/premieres/${props.premiereId}`)}>
        <Heading size="medium">{props.title}</Heading>
        <Body size="large" css={{ color: theme.teritary }}>
          {props.approvedAt.replace('T', ' ')} 결제 완료
        </Body>
        <Heading size="medium" css={{ color: theme.color.green600 }}>
          {props.amount.toLocaleString()}원
        </Heading>
      </Card>
    </>
  );
};

export default PaymentLogCard;
