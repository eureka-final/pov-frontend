import { Button, Badge, Heading, Body, Paragraph, Checkbox, Icon } from 'pov-design-system';
import Profile from '../../components/common/Profile';
const index = () => {
  const user = {
    name: 'Tom Coleman',
    avatarUrl: 'https://avatars2.githubusercontent.com/u/132554', // 임시 avatar URL
  };

  return (
    <div>
      <Button variant="primary" size="small">
        버튼
      </Button>

      <Profile user={user} />
      <Badge variant="keyword" cancel={false}>
        Bedge
      </Badge>
      <Badge variant="keyword" cancel={true}>
        로맨스
      </Badge>
      <Badge variant="section" click={false}>
        모든 리뷰
      </Badge>
      <Badge variant="section" click={true}>
        내 리뷰
      </Badge>

      <Checkbox checked label="로맨스" isChecked />
      <Checkbox label="로맨스" />
      <Icon icon="heartfill" />

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
    </div>
  );
};

export default index;
