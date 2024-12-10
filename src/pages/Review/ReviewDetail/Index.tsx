import Basic from '../../../components/templates/Basic/Basic';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Heading, Body, Paragraph, Icon, Badge } from 'pov-design-system';
import { Container, HeaderContainer, Additionals, TitleInfo, ReviewInfo, Count, BodyContainer, BackgroundLayer } from './ReviewDetail.styles';
import Profile from '../../../components/common/Profile';
import { useDeleteReviewMutation } from '../../../hooks/queries/useDeleteReviewMutation';
import dompurify from 'dompurify';

const Index = () => {
  const [reviewData, setReviewData] = useState({
    title: '누구냐, 너',
    contents:
      '<p>이 영화는 정말 놀라웠습니다. 스토리 전개가 흥미진진하고 캐릭터들이 생동감 있게 느껴졌습니다.</p><img src="https://example.com/images/movie_scene.jpg" alt="영화 장면" />',
    reviewer: '혜밍웨이',
    profileImage: 'https://avatars2.githubusercontent.com/u/123456',
    createdAt: '2024-12-09T10:10:19.360Z',
    likeAmount: 10,
    isLiked: true,
    spoiler: true,
    keywords: ['감동적인', '연출이 뛰어난'],
    url: 'https://s3-alpha-sig.figma.com/img/472e/ae15/f9f6158006f9a9a41457e6b4b6d6154e?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oTRHhPd9IUhqT~UvQ1cAGibItqIX~QP3qmoUvKRw45gi2Gf3cib6HeFLt32GBig2RDYo8xvUVz-Fg0jg78gwaWi6gl2GUmmhFHRGH-P7DW9cWCLDpCjku08nThf3L~-C-gOqL9CjS3322Drr9ZjtJk7GQZ2lMfZjnzF9RMXf~IzEGYOf-cRV-eFxe5GGhx0w2y~Fd32U7E8aIYODKefdq~GNMFVTb0Pr2Rkoi3bWr99Pr8oVEs4d-lvxrH8hn2M2uISXKd-1DBPQ1~yNp8RlNjtC-TlLuYWJN75XjnLJXJPagrjxVYGkgPxtVz5Co7t2CNrGyDB7BxRNf-EODwWw-A__',
  });

  const navigate = useNavigate();
  const { movieId, reviewId } = useParams<{ movieId: string; reviewId: string }>();
  const sanitizer = dompurify.sanitize;

  const goToEditPage = () => {
    //navigate(`/${movieId}/review/edit/${reviewId}`);
    navigate(`/review/1/edit/1`);
  };
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
      <Container>
        <HeaderContainer src={reviewData.url}>
          <BackgroundLayer src={reviewData.url}></BackgroundLayer>
          <TitleInfo>
            <Heading size="xLarge">{reviewData.title}</Heading>
          </TitleInfo>
          <ReviewInfo>
            <Profile name={reviewData.reviewer} avatarUrl={reviewData.profileImage} />
            <BodyContainer>
              <Body size="large">{new Date(reviewData.createdAt).toLocaleDateString()}</Body>
            </BodyContainer>
            <Additionals>
              <Icon icon="heartfill" color="#0DE781" />
              <Count color="#0DE781">{reviewData.likeAmount}</Count>
            </Additionals>
            <Additionals>
              {reviewData.keywords.map((item, index) => (
                <Badge variant="keyword" cancel={true} key={item + index}>
                  {item}
                </Badge>
              ))}
            </Additionals>
          </ReviewInfo>
        </HeaderContainer>
      </Container>

      <Paragraph>
        <div dangerouslySetInnerHTML={{ __html: sanitizer(`${reviewData.contents}`) }} />
      </Paragraph>
      <button onClick={goToEditPage}>수정하기</button>
      <button onClick={handleDelete}>삭제하기</button>
    </Basic>
  );
};

export default Index;
