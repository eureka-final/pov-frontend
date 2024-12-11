import Basic from '../../../components/templates/Basic/Basic';
import { useNavigate, useParams } from 'react-router-dom';
import { Heading, Body, Paragraph, Icon, Badge, useOverlay, Modal, Button } from 'pov-design-system';
import { Container, HeaderContainer, Additionals, TitleInfo, ReviewInfo, Count, BodyContainer, BackgroundLayer, Wrapper } from './ReviewDetail.styles';
import Profile from '../../../components/common/Profile';
import { useReviewDetailQuery } from '../../../hooks/queries/useReviewsQuery';
import { useDeleteReviewMutation } from '../../../hooks/queries/useDeleteReviewMutation';
import dompurify from 'dompurify';

const Index = () => {
  const { movieId, reviewId } = useParams<{ movieId: string; reviewId: string }>();
  const navigate = useNavigate();
  const sanitizer = dompurify.sanitize;
  const { isOpen: isSaveOpen, open: saveOpen, close: saveClose } = useOverlay();

  const { reviewData } = useReviewDetailQuery(movieId!, reviewId!);

  const deleteReviewMutation = useDeleteReviewMutation();

  const handleDelete = () => {
    deleteReviewMutation.mutate(
      { movieId: movieId!, reviewId: reviewId! },
      {
        onSuccess: () => navigate('/review'),
      }
    );
  };
  return (
    <Basic>
      {reviewData && (
        <>
          <Container>
            <HeaderContainer src={reviewData.data.thumbnail}>
              <BackgroundLayer src={reviewData.data.thumbnail}></BackgroundLayer>
              <TitleInfo>
                <Heading size="xLarge">{reviewData.data.title}</Heading>
              </TitleInfo>
              <ReviewInfo>
                <Profile name={reviewData.data.reviewer} avatarUrl={reviewData.data.profileImage} />
                <BodyContainer>
                  <Body size="large">{new Date(reviewData.data.createdAt).toLocaleDateString()}</Body>
                </BodyContainer>
                <Additionals>
                  <Icon icon="heartfill" color="#0DE781" />
                  <Count color="#0DE781">{reviewData.data.likeAmount}</Count>
                </Additionals>
                <Additionals>
                  {reviewData.data.keyword.map((item, index) => (
                    <Badge variant="keyword" cancel={true} key={item + index}>
                      {item}
                    </Badge>
                  ))}
                </Additionals>
              </ReviewInfo>
              <Wrapper>
                <div>
                  <Icon icon="edit" onClick={() => navigate(`/review/${movieId}/edit/${reviewId}`)} />
                  <Body>수정</Body>
                </div>
                <div>
                  <Icon icon="delete" onClick={saveOpen} />
                  <Body>삭제</Body>
                </div>
              </Wrapper>
            </HeaderContainer>
          </Container>

          <Paragraph>
            <div dangerouslySetInnerHTML={{ __html: sanitizer(`${reviewData.data.contents}`) }} />
          </Paragraph>

          {/* 삭제 버튼 누르면 나오는 모달창 */}
          <Modal isOpen={isSaveOpen} closeModal={saveClose}>
            <Heading size="medium">정말 삭제하시겠습니까?</Heading>
            <Button variant="primary" onClick={handleDelete} css={{ width: '100%' }}>
              삭제하기
            </Button>
          </Modal>
        </>
      )}
    </Basic>
  );
};

export default Index;
