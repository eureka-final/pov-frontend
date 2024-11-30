import { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard';
import axios from 'axios';

interface sectionType {
  sectionsType: string;
}

function ReviewList({ sectionsType }: sectionType) {
  const [reviews, setReviews] = useState([]);
  const endpoints = ['/movies/reviews', '/movies/clubReviews'];

  useEffect(() => {
    axios
      .all(endpoints.map((endpoint) => axios.get(endpoint)))

      .then(function (response) {
        const combineReviews = response[0].data.concat(response[1].data);

        if (sectionsType == '모든 리뷰') {
          setReviews(combineReviews);
        }
      })

      .catch(function (error) {
        console.log(error);
      });
  }, [sectionsType]);

  return (
    <>
      {reviews.map((review) => {
        return (
          <ReviewCard
            key={review.id}
            id={review.id}
            movieTitle={review.movieTitle}
            title={review.title}
            contents={review.contents}
            reviewer={review.reviewer}
            profileImge={review.profileImge}
            thumbnail={review.thumbnail}
            createdAt={review.createdAt}
            likeAmount={review.likeAmount}
            isLiked={review.isLiked}
          />
        );
      })}
    </>
  );
}

export default ReviewList;
