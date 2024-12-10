import { Button, Badge, Heading, Body, Paragraph, Checkbox, Icon, ShowMoreBtn, Logo, Input, SwitchToggle } from 'pov-design-system';
import { Modal, useOverlay } from 'pov-design-system';
import Padded from '../../components/templates/Padded/Padded';

const index = () => {
  const { isOpen, open, close } = useOverlay();
  const handleChange = () => {
    console.log('switchtoggle');
  };
  return (
    <Padded>
      <Button variant="primary" size="small">
        버튼
      </Button>
      <SwitchToggle checkedState={false} onChange={handleChange} />
      <SwitchToggle checkedState={true} onChange={handleChange} />

      <div css={[{ width: '350px' }]}>
        <Input placeholder="검색어를 입력해 주세요" icon={<Icon icon="search" color="#ADACAF" />} />
      </div>
      <Input placeholder="제목을 입력해 주세요" />
      <Input placeholder="제목을 입력해 주세요" supportingText="40자 내로 입력해주세요" />
      <Input placeholder="제목을 입력해 주세요" supportingText="40자 내로 입력해주세요" isError={true} />
      <Input label="제목" placeholder="제목을 입력해 주세요" supportingText="40자 내로 입력해주세요" />
      <Input label="제목" placeholder="제목을 입력해 주세요" required={true} supportingText="40자 내로 입력해주세요" />

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

      <Logo icon="type1" />
      <Logo icon="type2" />

      <Button onClick={open}>Show Modal</Button>
      <Modal isOpen={isOpen} closeModal={close}>
        <div css={[{ width: '350px' }]}>
          <Heading size="medium">Title</Heading>
          <Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum
          </Body>
          <div css={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <Button variant="secondary" onClick={close} css={{ width: '45%' }}>
              Close
            </Button>
            <Button variant="primary" onClick={close} css={{ width: '45%' }}>
              Action
            </Button>
          </div>
        </div>
      </Modal>

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
