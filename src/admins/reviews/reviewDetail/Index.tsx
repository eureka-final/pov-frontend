import AdminTemplate from '../../../components/templates/Admin/AdminTemplate';
import { Container, Header, CardContainer, Info, Buttons, ReviewCardContainer, Poster, FlexBetween, LikeContainer } from './Index.styles';
import { Heading, Body, Paragraph, Icon, Button } from 'pov-design-system';
import Profile from '../../../components/common/Profile/Profile';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import dompurify from 'dompurify';
import { useBlindReviewMutation } from '../../../hooks/queries/useBlindReviewMutation';
import { useToast } from '../../../hooks/common/useToast';

const Index = () => {
  const location = useLocation();
  const { review } = location.state || {};
  const [likes, setLikes] = useState(review.likeAmount);
  const [likeAction, setLikeAction] = useState<boolean | null>(review.isLiked);
  const blindReviewMutation = useBlindReviewMutation();
  const { createToast } = useToast();

  const sanitizer = dompurify.sanitize;

  const truncateContents = (text: string | undefined, maxLength: number) => {
    if (!text) return '';
    if (text.length > maxLength) {
      const truncatedText = text.substring(0, maxLength);
      return (
        <>
          <div dangerouslySetInnerHTML={{ __html: sanitizer(truncatedText).replace(/<img[^>]*>/g, '') }} />
        </>
      );
    }
    return <div dangerouslySetInnerHTML={{ __html: sanitizer(text).replace(/<img[^>]*>/g, '') }} />;
  };

  const handleBlindReview = () => {
    blindReviewMutation.mutate(
      { movieId: review.movieId, reviewId: review.reviewId },
      //data format이 일단 다름
      {
        onSuccess: () => {
          createToast('리뷰 숨김처리 성공', 'success');
        },
      }
    );
  };

  useEffect(() => {
    console.log(review);
  }, []);

  return (
    <AdminTemplate>
      <Container>
        <Header>
          <Heading size="large">리뷰 숨김 처리하기</Heading>
          <Body size="xLarge" style={{ color: '#ADACAF' }}>
            작성된 모든 리뷰를 조회하고 숨김 처리할 수 있습니다.
          </Body>
        </Header>
        <CardContainer>
          <Info>
            <Poster>
              <img src={review?.thumbnail.replace('/w154/', '/w92/')} alt={review.movieTitle} />
              <Body size="small">{review.movieTitle}</Body>
            </Poster>
            <ReviewCardContainer>
              <Profile name={review.reviewer} avatarUrl={review.profileImage} />
              <Paragraph>{review.title}</Paragraph>
              <Body size="large">{truncateContents(review.contents, 9999)}</Body>
            </ReviewCardContainer>
          </Info>
          <FlexBetween>
            <Body>{new Date(review.createdAt).toLocaleDateString()}</Body>
            <LikeContainer>
              <Icon icon={likeAction ? 'heartfill' : 'heartline'} /> {likes}
            </LikeContainer>
          </FlexBetween>
          <Buttons>
            <Button variant="primary" css={{ width: '50%' }} onClick={handleBlindReview}>
              리뷰 숨김 처리하기
            </Button>
          </Buttons>
        </CardContainer>
      </Container>
    </AdminTemplate>
  );
};

export default Index;
