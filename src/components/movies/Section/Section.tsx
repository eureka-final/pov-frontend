import Card from '../Card/Card';
import { Container, CardContainer } from './Section.styles';
import { Heading } from 'pov-design-system';

interface SectionProps {
  items: {
    name: string;
    date: string;
    likes: string;
    reviews: string;
    src: {
      url: string;
      MobileHeight: number;
      PcHeight: number;
      br: string;
    };
  }[];
  heading: string;
}

const Section = ({ items, heading }: SectionProps) => {
  return (
    <Container>
      <Heading size="large">{heading}</Heading>
      <CardContainer>
        {items.map((item, index) => (
          <Card key={item.name + index} item={item} />
        ))}
      </CardContainer>
    </Container>
  );
};

export default Section;
