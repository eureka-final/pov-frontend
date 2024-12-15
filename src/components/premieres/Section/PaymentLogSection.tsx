import { Section, NoContentsContainer } from './PaymentLogSection.style';
import { Body } from 'pov-design-system';
import PaymentLogCard from '../Card/PaymentLogCard';
import { usePremieresEntryQuery } from '../../../hooks/queries/usePremieresEntryQuery';

const PaymentLogSection = () => {
  const { premiereEntryData } = usePremieresEntryQuery();
  const premiereEntry = premiereEntryData?.data.entry;

  return (
    <Section>
      {premiereEntry!.length === 0 && (
        <NoContentsContainer>
          <Body size="large">시사회 결제 내역이 없어요.</Body>
        </NoContentsContainer>
      )}
      {premiereEntry!.map((item, index) => (
        <PaymentLogCard key={index} title={item.title} approvedAt={item.approvedAt} amount={item.amount} premiereId={item.premiereId}></PaymentLogCard>
      ))}
    </Section>
  );
};

export default PaymentLogSection;
