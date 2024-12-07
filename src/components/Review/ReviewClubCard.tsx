import { useNavigate, useParams } from 'react-router-dom';
import { CardContainer, Poster, CardFlex, ReviewCardContainer, LikeContainer, FlexBetween, Spoiler, SpoMore, ReadMore } from './ReviewCard.style';
import { Body, Paragraph, Icon } from 'pov-design-system';
import Profile from '../common/Profile';

interface ReviewCardProps {
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

function ReviewClubCard({ movieTitle, title, contents, reviewer, profileImge, thumbnail, createdAt, likeAmount, isLiked, spoiler }: ReviewCardProps) {
  const navigate = useNavigate();

  //const { movieId, reviewId } = useParams<{ movieId: string; reviewId: string }>();

  const truncateContents = (text: string | undefined, maxLength: number) => {
    if (!text) return '';
    if (text.length > maxLength) {
      const truncatedText = text.substring(0, maxLength);
      return (
        <>
          {truncatedText}
          <span>...</span>
          <ReadMore>더보기</ReadMore>
        </>
      );
    }
    return text;
  };

  return (
    <CardContainer
      onClick={() => {
        // navigate(`/review/${movieId}/detail/${reviewId}`);
        navigate(`/review/1/detail/1`);
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
                <SpoMore>더보기</SpoMore>
              </Body>
            </Spoiler>
          ) : (
            <Body size="large">{truncateContents(contents, 145)}</Body>
          )}

          <FlexBetween>
            <Body>{createdAt}</Body>
            <LikeContainer>
              <Icon icon={isLiked ? 'heartfill' : 'heartline'} /> {likeAmount}
            </LikeContainer>
          </FlexBetween>
        </ReviewCardContainer>
      </CardFlex>
    </CardContainer>
  );
}

export default ReviewClubCard;
