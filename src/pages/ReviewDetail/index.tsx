import { useState, useEffect } from 'react';
import axios from 'axios';
import Main from '../../components/ReviewDetail/Main';
import Padded from '../../components/templates/Padded/Padded';

const Index = ({ reviewId }: { reviewId: string }) => {
  const [reviews, setReviews] = useState<{ thumbnail: string; title: string; contents: string } | null>(null);

  useEffect(() => {
    const fetchReview = async () => {
      try {
        const response = await axios.get(`/movies/reviews/${reviewId}`);
        console.log('데이터 요청 성공:', response.data);
        setReviews(response.data);
      } catch (error) {
        console.error('데이터 요청 실패:', error);
      }
    };

    fetchReview();
  }, [reviewId]); // reviewId가 변경될 때만 실행되도록 설정

  return <Padded>{reviews ? <Main image={reviews.thumbnail} title={reviews.title} contents={reviews.contents} /> : <p>Loading...</p>}</Padded>;
};

export default Index;
