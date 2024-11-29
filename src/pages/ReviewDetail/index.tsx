import { useState, useEffect } from 'react';
import axios from 'axios';
import Main from '../../components/ReviewDetail/Main';
import Padded from '../../components/templates/Padded/Padded';
import { useParams } from 'react-router-dom';

const Index = () => {
  const [review, setReview] = useState<null>(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchReview = async () => {
      try {
        const response = await axios.get(`/movies/reviews/${id}`);
        console.log('데이터 요청 성공:', response.data);
        setReview(response.data);
      } catch (error) {
        console.error('데이터 요청 실패:', error);
      }
    };

    fetchReview();
  }, [id]);

  return (
    <Padded>
      {review ? (
        <Main
          thumbnail={review.thumbnail}
          title={review.title}
          contents={review.contents}
          reviewer={review.reviewer}
          profileImge={review.profileImge}
          createdAt={review.createdAt}
          likeAmount={review.likeAmount}
          isLiked={review.isLiked}
          keywords={review.keywords}
        />
      ) : (
        <p>Loading...</p>
      )}
    </Padded>
  );
};

export default Index;
