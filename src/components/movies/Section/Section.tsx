import { Heading } from 'pov-design-system';

import { Movie } from '@/types/movie';
import Card from '@/components/movies/Card/Card';
import { SectionContainer, CardContainer } from '@/components/movies/Section/Section.styles';

interface SectionProps {
  items: Movie[];
  heading: string;
}

const Section = ({ items, heading }: SectionProps) => {
  return (
    <SectionContainer>
      <Heading size="xLarge">{heading}</Heading>
      <CardContainer>
        {items.map((item, index) => (
          <Card key={item.title + index} item={item} />
        ))}
      </CardContainer>
    </SectionContainer>
  );
};

export default Section;
