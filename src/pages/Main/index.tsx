import { Button, Badge, Heading, Body, Paragraph, Checkbox, Icon, ShowMoreBtn } from 'pov-design-system';
import ReviewToggle from '../../components/common/ReviewToggle';
import Padded from '../../components/templates/Padded/Padded';

const index = () => {
  return (
    <Padded>
      <ReviewToggle />

      <Button variant="primary" size="small">
        버튼
      </Button>

      <ShowMoreBtn />

      <Badge variant="keyword" cancel={true}>
        감동적인
      </Badge>
      <Badge variant="keyword" cancel={false}>
        재미있는
      </Badge>
      <Badge variant="section" click={false}>
        모든 리뷰
      </Badge>
      <Badge variant="section" click={true}>
        내 리뷰
      </Badge>

      <Checkbox checked label="로맨스" isChecked />
      <Checkbox label="로맨스" />
      <div style={{ color: '#1BD27D' }}>
        <Icon icon="heartfill" /> 156
      </div>
      <div style={{ color: '#1BD27D' }}>
        <Icon icon="heartfill" /> 좋아요
      </div>

      <Heading size="xxLarge">Heading01</Heading>
      <Heading size="xLarge">Heading02</Heading>
      <Heading size="large">Heading03</Heading>
      <Heading>Heading default: Heading04</Heading>
      <Heading size="medium">Heading04</Heading>
      <Heading size="small">Heading05</Heading>

      <Body size="xLarge">Body01</Body>
      <Body size="large">Body02</Body>
      <Body>Body default: Body03</Body>
      <Body size="medium">Body03</Body>
      <Body size="small">Body04</Body>

      <Paragraph>Paragraph</Paragraph>
    </Padded>
  );
};

export default index;
