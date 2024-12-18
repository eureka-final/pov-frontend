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
import { useAuthStore } from '../../../stores/useAuthStore';

const Index = () => {
  const { movieId, reviewId } = useParams<{ movieId: string; reviewId: string }>();
  const navigate = useNavigate();

  const user = useAuthStore((state) => state.user);

  const { createToast } = useToast();

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
          createToast('리뷰 삭제 성공!', 'success');
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
                  <Body size="large">{new Date(reviewData.data.createdAt).toLocaleDateString()}</Body>
                </BodyContainer>
                <LikeContainer onClick={onLike}>
                  <Icon icon={likeAction ? 'heartfill' : 'heartline'} /> {likes}
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
                {reviewData.data.reviewer == user?.nickname && (
                  <>
                    <Menu onClick={() => navigate(`/review/${movieId}/edit/${reviewId}`)}>
                      <Icon icon="edit" />
                      <Body>수정</Body>
                    </Menu>
                    <Menu onClick={saveOpen}>
                      <Icon icon="delete" />
                      <Body>삭제</Body>
                    </Menu>
                  </>
                )}
              </Wrapper>
            </HeaderContainer>

            <Paragraph css={{ marginTop: '48px' }}>
              <div dangerouslySetInnerHTML={{ __html: sanitizer(`${reviewData.data.contents}`) }} />
            </Paragraph>
          </Container>

          {/* 삭제 버튼 누르면 나오는 모달창 */}
          <Modal isOpen={isSaveOpen} closeModal={saveClose}>
            <Heading size="medium">정말 삭제하시겠습니까?</Heading>
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
