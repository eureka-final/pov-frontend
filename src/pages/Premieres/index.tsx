import Padded from '../../components/templates/Padded/Padded';
import { Heading } from 'pov-design-system';
import PremiereSection from '../../components/premieres/Section/PremiereSection';
import type { PremiereSectionProps } from '../../components/premieres/Section/PremiereSection';

const dummyPremiere: PremiereSectionProps = {
  items: [
    {
      premiereId: '1',
      title: 'asdf',
      startAt: '2024-12-10 10:00',
      endAt: '2024-12-10 16:00',
      isPaymentRequired: true,
      price: 10000,
      thumbnailImage: 'https://upload.wikimedia.org/wikipedia/ko/b/b5/%EC%98%AC%EB%93%9C%EB%B3%B4%EC%9D%B4_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg',
      bodyImage: '',
    },
    {
      premiereId: '2',
      title: 'asdf',
      startAt: '2024-12-10 10:00',
      endAt: '2024-12-10 16:00',
      isPaymentRequired: true,
      price: 10000,
      thumbnailImage: 'https://upload.wikimedia.org/wikipedia/ko/b/b5/%EC%98%AC%EB%93%9C%EB%B3%B4%EC%9D%B4_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg',
      bodyImage: '',
    },
    {
      premiereId: '3',
      title: 'asdf',
      startAt: '2024-12-10 10:00',
      endAt: '2024-12-10 16:00',
      isPaymentRequired: true,
      price: 10000,
      thumbnailImage: 'https://upload.wikimedia.org/wikipedia/ko/b/b5/%EC%98%AC%EB%93%9C%EB%B3%B4%EC%9D%B4_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg',
      bodyImage: '',
    },
    {
      premiereId: '4',
      title: 'asdf',
      startAt: '2024-12-10 10:00',
      endAt: '2024-12-10 16:00',
      isPaymentRequired: true,
      price: 10000,
      thumbnailImage: 'https://upload.wikimedia.org/wikipedia/ko/b/b5/%EC%98%AC%EB%93%9C%EB%B3%B4%EC%9D%B4_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg',
      bodyImage: '',
    },
    {
      premiereId: '5',
      title: 'asdf',
      startAt: '2024-12-10 10:00',
      endAt: '2024-12-10 16:00',
      isPaymentRequired: true,
      price: 10000,
      thumbnailImage: 'https://upload.wikimedia.org/wikipedia/ko/b/b5/%EC%98%AC%EB%93%9C%EB%B3%B4%EC%9D%B4_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg',
      bodyImage: '',
    },
    {
      premiereId: '6',
      title: 'asdf',
      startAt: '2024-12-10 10:00',
      endAt: '2024-12-10 16:00',
      isPaymentRequired: true,
      price: 10000,
      thumbnailImage: 'https://upload.wikimedia.org/wikipedia/ko/b/b5/%EC%98%AC%EB%93%9C%EB%B3%B4%EC%9D%B4_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg',
      bodyImage: '',
    },
  ],
};

const index = () => {
  return (
    <Padded>
      <Heading size="large" css={{ marginTop: '24px' }}>
        시사회 이벤트 정보를 확인해보세요 👀
      </Heading>
      <PremiereSection items={dummyPremiere.items}></PremiereSection>
    </Padded>
  );
};

export default index;
