import { Section } from './PremiereSection.style';
import PremiereCard from '../Card/PremiereCard';
import type { PremiereCardProps } from '../Card/PremiereCard';

export interface PremiereSectionProps {
  items: PremiereCardProps[];
}

const PremiereSection = ({ items }: PremiereSectionProps) => {
  return (
    <Section>
      {items.map((item, index) => (
        <PremiereCard
          key={index}
          premiereId={item.premiereId}
          title={item.title}
          startAt={item.startAt}
          endAt={item.endAt}
          isPaymentRequired={item.isPaymentRequired}
          price={item.price}
          thumbnailImage={item.thumbnailImage}
          bodyImage={item.bodyImage}
        ></PremiereCard>
      ))}
    </Section>
  );
};

export default PremiereSection;
