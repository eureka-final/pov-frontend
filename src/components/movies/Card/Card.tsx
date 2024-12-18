import { Movie } from '../../../types/movie';
import { CardWapper, InfoContainer, Info, LikeContainer } from './Card.styles';
import { Heading, Body, Icon } from 'pov-design-system';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useLikeMovieMutation, useDisLikeMovieMutation } from '../../../hooks/queries/useLikeMovieMutation';
import NoPoster from '/public/NoPoster.svg?react';

interface CardProps {
  item: Movie;
}

const Card = ({ item }: CardProps) => {
  const navigate = useNavigate();

  const [likes, setLikes] = useState(item?.movieLikeCount || 0);
  const [likeAction, setLikeAction] = useState<boolean>(item.isLiked || false);
  const likeMutation = useLikeMovieMutation();
  const disLikeMutation = useDisLikeMovieMutation();

  const onLike = () => {
    if (likeAction === false) {
      likeMutation.mutate(
        { movieId: item.id! },
        {
          onSuccess: () => {
            setLikes(likes + 1);
            setLikeAction(true);
          },
        }
      );
    } else {
      disLikeMutation.mutate(
        { movieId: item.id! },
        {
          onSuccess: () => {
            setLikes(likes - 1);
            setLikeAction(false);
          },
        }
      );
    }
  };

  return (
    <CardContainer onClick={() => navigate(`/movie/${item.id}/detail`)}>
      {item.poster && item.poster.endsWith('null') ? <NoPoster /> : <ThumbnailImage src={item.poster} />}
      <SingleLineHeading size="medium">{item.title}</SingleLineHeading>
      <Body size="large" style={{ color: '#ADACAF' }}>
        {formatDate(item.released)}
      </Body>
      <Info>
        <InfoContainer>
          <LikeContainer onClick={onLike}>
            <Icon icon={likeAction ? 'heartfill' : 'heartline'} width="20px" height="20px" /> {likes}
          </LikeContainer>
        </InfoContainer>
        <InfoContainer>
          <LikeContainer>
            <Icon icon="reviewline" width="16px" height="16px" css={{ color: theme.secondary }} />{' '}
            <Body size="large" css={{ color: theme.secondary }}>
              {item.movieReviewCount}
            </Body>
          </LikeContainer>
        </InfoContainer>
      </Info>
    </CardWapper>
  );
};

export default Card;
