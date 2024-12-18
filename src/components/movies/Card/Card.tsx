import { Movie } from '../../../types/movie';
import { CardWapper, InfoContainer, Info, LikeContainer } from './Card.styles';
import { Heading, Body, Icon } from 'pov-design-system';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useLikeMovieMutation, useDisLikeMovieMutation } from '../../../hooks/queries/useLikeMovieMutation';

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
    <CardWapper>
      <div onClick={() => navigate(`/movie/${item.id}/detail`)}>
        <img src={item.poster} />
        <Heading size="medium">{item.title}</Heading>
        <Body size="large" style={{ color: '#ADACAF' }}>
          {item.released}
        </Body>
      </div>
      <Info>
        <InfoContainer>
          <LikeContainer onClick={onLike}>
            <Icon icon={likeAction ? 'heartfill' : 'heartline'} width="20px" height="20px" /> {likes}
          </LikeContainer>
        </InfoContainer>
        <InfoContainer>
          <LikeContainer>
            <Icon icon="reviewline" width="20px" height="20px" /> {item.movieReviewCount}
          </LikeContainer>
        </InfoContainer>
      </Info>
    </CardWapper>
  );
};

export default Card;
