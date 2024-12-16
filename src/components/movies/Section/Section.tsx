import { Movie } from '../../../types/movie';
import Card from '../Card/Card';
import { Container, CardContainer } from './Section.styles';
import { Heading } from 'pov-design-system';

interface SectionProps {
  items: Movie[];
  heading: string;
}

const Section = ({ items, heading }: SectionProps) => {
  return (
    <Container>
      <Heading size="large">{heading}</Heading>
      <CardContainer>
        {items.map((item, index) => (
          <Card key={item.title + index} item={item} />
        ))}
      </CardContainer>
    </Container>
  );
};

export default Section;
