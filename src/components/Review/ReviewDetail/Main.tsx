import Profile from '../../common/Profile';
import { Heading, Body, Paragraph, Icon, Badge } from 'pov-design-system';

interface MainProps {
  thumbnail: string;
  title: string;
  contents: string;
  reviewer: string;
  profileImge: string;
  createdAt: string;
  likeAmount: string;
  isLiked: string;
  keywords: string;
}

export default function Main({ thumbnail, title, contents, reviewer, profileImge, createdAt, likeAmount, isLiked, keywords }: MainProps) {
  return (
    <>
      <div
        style={{
          background: `linear-gradient(to bottom, rgba(0,0,0,0)
      39%, rgba(0,0,0,0)
      41%, rgba(0,0,0,0.65)
      100%),
      url('${thumbnail}'), #1c1c1c`,
          height: '500px',
          backgroundSize: '100%, cover',
          backgroundPosition: 'center, center',
          position: 'relative',
        }}
      >
        <div>
          <div
            style={{
              position: 'absolute',
              maxWidth: '500px',
              bottom: '2rem',
              marginLeft: '2rem',
            }}
          >
            <Heading size="xxLarge">{title}</Heading>
            <Profile name={reviewer} avatarUrl={profileImge} />
            <Body>{createdAt}</Body>
            <Icon icon={isLiked ? 'heartfill' : 'heartline'} /> {likeAmount}
            {/* TODO: 배열로 map 처리하기  */}
            <Badge variant="keyword" cancel={true}>
              {keywords}
            </Badge>
          </div>
        </div>
      </div>
      <Paragraph>{contents}</Paragraph>
    </>
  );
}
