import { Body } from 'pov-design-system';

import { Section, NoContentsContainer } from '@/components/premieres/Section/PaymentLogSection.style';
import PaymentLogCard from '@/components/premieres/Card/PaymentLogCard';
import { PaymentLogCardContainer } from '@/components/premieres/Card/PaymentLogCard.style';
import { usePremieresEntryQuery } from '@/hooks/queries/usePremieresEntryQuery';

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
