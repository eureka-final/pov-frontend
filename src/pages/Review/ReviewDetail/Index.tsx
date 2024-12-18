import Basic from '../../../components/templates/Basic/Basic';
import { useNavigate, useParams } from 'react-router-dom';
import { Heading, Body, Paragraph, Icon, Badge, useOverlay, Modal, Button } from 'pov-design-system';
import {
  Container,
  HeaderContainer,
  Additionals,
  TitleInfo,
  ReviewInfo,
  BodyContainer,
  BackgroundLayer,
  Wrapper,
  Menu,
  LikeContainer,
} from './ReviewDetail.styles';
import Profile from '../../../components/common/Profile/Profile';
import { useReviewDetailQuery } from '../../../hooks/queries/useReviewsQuery';
import { useDeleteReviewMutation } from '../../../hooks/queries/useDeleteReviewMutation';
import dompurify from 'dompurify';
import { useToast } from '../../../hooks/common/useToast';

import { useState } from 'react';
import { useLikeMutation, useDisLikeMutation } from '../../../hooks/queries/useLikeMutation';
import { useTheme } from '@emotion/react';

const Index = () => {
  const { movieId, reviewId } = useParams<{ movieId: string; reviewId: string }>();
  const navigate = useNavigate();
  const { createToast } = useToast();
  const theme = useTheme();
  const { isOpen: isSaveOpen, open: saveOpen, close: saveClose } = useOverlay();

  const sanitizer = dompurify.sanitize;

  const { reviewData } = useReviewDetailQuery(movieId!, reviewId!);

  const deleteReviewMutation = useDeleteReviewMutation();

  const [likes, setLikes] = useState(reviewData?.data.likeAmount || 0);
  const [likeAction, setLikeAction] = useState<boolean>(reviewData?.data.isLiked || false);
  const likeMutation = useLikeMutation();
  const disLikeMutation = useDisLikeMutation();

  const onLike = () => {
    if (likeAction === false) {
      likeMutation.mutate(
        { movieId: movieId!, reviewId: reviewId! },
        {
          onSuccess: () => {
            setLikes(likes + 1);
            setLikeAction(true);
          },
        }
      );
    } else {
      disLikeMutation.mutate(
        { movieId: movieId!, reviewId: reviewId! },
        {
          onSuccess: () => {
            setLikes(likes - 1);
            setLikeAction(false);
          },
        }
      );
    }
  };

  const handleDelete = () => {
    deleteReviewMutation.mutate(
      { movieId: movieId!, reviewId: reviewId! },
      {
        onSuccess: () => {
          saveClose();
          navigate('/review');
          createToast('리뷰가 삭제되었어요.', 'success');
        },
      }
    );
  };
  return (
    <Basic>
      {reviewData && (
        <>
          <Container>
            <BackgroundLayer src={reviewData.data.thumbnail.replace('/w154/', '/original/')}></BackgroundLayer>
            <HeaderContainer src={reviewData.data.thumbnail.replace('/w154/', '/original/')}>
              <TitleInfo>
                <Heading size="xLarge">{reviewData.data.title}</Heading>
              </TitleInfo>
              <ReviewInfo>
                <Profile name={reviewData.data.reviewer} avatarUrl={reviewData.data.profileImage} />
                <BodyContainer>
                  <Body size="large" css={{ color: theme.teritary }}>
                    {new Date(reviewData.data.createdAt).toLocaleDateString()}
                  </Body>
                </BodyContainer>
                <LikeContainer onClick={onLike}>
                  <Icon icon={likeAction ? 'heartfill' : 'heartline'} css={{ width: '16px' }} /> {likes}
                </LikeContainer>
                <Additionals>
                  {reviewData.data.keywords.map((item, index) => (
                    <Badge variant="keyword" cancel={true} key={item + index}>
                      {item}
                    </Badge>
                  ))}
                </Additionals>
              </ReviewInfo>
              <Wrapper>
                <Menu onClick={() => navigate(`/review/${movieId}/edit/${reviewId}`)}>
                  <Icon icon="edit" css={{ width: '14px' }} />
                  <Body size="large">수정하기</Body>
                </Menu>
                <Menu onClick={saveOpen}>
                  <Icon icon="delete" css={{ width: '14px' }} />
                  <Body size="large">삭제하기</Body>
                </Menu>
              </Wrapper>
            </HeaderContainer>

            <Paragraph css={{ marginTop: '48px', marginBottom: '300px' }}>
              <div dangerouslySetInnerHTML={{ __html: sanitizer(`${reviewData.data.contents}`) }} />
            </Paragraph>
          </Container>

          {/* 삭제 버튼 누르면 나오는 모달창 */}
          <Modal isOpen={isSaveOpen} closeModal={saveClose}>
            <Heading size="medium">정말 리뷰를 삭제하시겠어요?</Heading>
            <Button variant="primary" onClick={handleDelete} css={{ width: '100%', marginTop: '30px' }}>
              삭제하기
            </Button>
          </Modal>
        </>
      )}
    </Basic>
  );
};

export default Index;
