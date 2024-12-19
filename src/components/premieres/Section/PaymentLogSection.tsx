import { Section, NoContentsContainer } from './PaymentLogSection.style';
import { Body } from 'pov-design-system';
import PaymentLogCard from '../Card/PaymentLogCard';
import { usePremieresEntryQuery } from '../../../hooks/queries/usePremieresEntryQuery';
import { PaymentLogCardContainer } from '../Card/PaymentLogCard.style';

const PaymentLogSection = () => {
  const { premiereEntryData } = usePremieresEntryQuery();

  if (!premiereEntryData) {
    return (
      <NoContentsContainer>
        <Body size="large">시사회 결제 내역이 없어요.</Body>
      </NoContentsContainer>
    );
  }

  return (
    <Section>
      <PaymentLogCardContainer>
        {premiereEntryData?.data.entry!.map((item, index) => (
          <PaymentLogCard key={index} title={item.title} approvedAt={item.approvedAt} amount={item.amount} premiereId={item.premiereId}></PaymentLogCard>
        ))}
      </PaymentLogCardContainer>
    </Section>
  );
};

export default PaymentLogSection;
