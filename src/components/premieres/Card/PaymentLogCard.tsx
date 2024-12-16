import { Heading, Body } from 'pov-design-system';
import { Card } from './PaymentLogCard.style';
import { useTheme } from '@emotion/react';
import { useNavigate } from 'react-router-dom';
import type { PremiereEntry } from '../../../types/premiere';

const PaymentLogCard = (props: PremiereEntry) => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Card onClick={() => navigate(`/premieres/${props.premiereId}`)}>
      <Heading size="medium">{props.title}</Heading>
      <Body size="large">{props.approvedAt}</Body>
      <Heading size="medium" css={{ color: theme.color.green600 }}>
        {props.amount}
      </Heading>
    </Card>
  );
};

export default PaymentLogCard;
