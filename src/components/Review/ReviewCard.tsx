import { useNavigate } from 'react-router-dom';
import { CardContainer, Poster, CardFlex, ReviewCardContainer, LikeContainer, Spoiler, More } from './ReviewCard.style';
import { Body, Paragraph, Icon } from 'pov-design-system';
import Profile from '../common/Profile';

interface ReviewCardProps {
  id: number;
  movieTitle: string;
  title: string;
  contents: string | undefined;
  reviewer: string;
  profileImge: string;
  thumbnail: string;
  createdAt: string;
  likeAmount: number;
  isLiked: boolean;
  spoiler: boolean;
}

function ReviewCard({ id, movieTitle, title, contents, reviewer, profileImge, thumbnail, createdAt, likeAmount, isLiked, spoiler }: ReviewCardProps) {
  const navigate = useNavigate();

  return (
    <CardContainer
      onClick={() => {
        navigate(`/review/detail/${id}`);
      }}
    >
      <CardFlex>
        <Poster>
          <img src={thumbnail} alt={movieTitle} />
          <Body size="small">{movieTitle}</Body>
        </Poster>
        <ReviewCardContainer>
          <Profile name={reviewer} avatarUrl={profileImge} />
          <Paragraph>{title}</Paragraph>
          {spoiler ? (
            <Spoiler>
              <Body size="large">스포일러가 있어요!</Body>
              <Body size="large">
                <More>더보기</More>
              </Body>
            </Spoiler>
          ) : (
            <Body size="large">{contents}</Body>
          )}

          <Body>{createdAt}</Body>
          <LikeContainer>
            <Icon icon={isLiked ? 'heartfill' : 'heartline'} /> {likeAmount}
          </LikeContainer>
        </ReviewCardContainer>
      </CardFlex>
    </CardContainer>
  );
}

export default ReviewCard;
