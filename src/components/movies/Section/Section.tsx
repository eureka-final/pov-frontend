import { Movie } from '../../../types/movie';
import Card from '../Card/Card';
import { SectionContainer, CardContainer } from './Section.styles';
import { Heading } from 'pov-design-system';

interface SectionProps {
  items: Movie[];
  heading: string;
}

const Section = ({ items, heading }: SectionProps) => {
  return (
    <SectionContainer>
      <Heading size="large">{heading}</Heading>
      <CardContainer>
        {items.map((item, index) => (
          <Card key={item.title + index} item={item} />
        ))}
      </CardContainer>
    </SectionContainer>
  );
};

export default Section;
