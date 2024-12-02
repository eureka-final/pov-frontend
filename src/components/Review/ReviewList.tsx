import { useEffect, useState } from 'react';
import axios from 'axios';
import ReviewCard from './ReviewCard';
import { ReviewListContainer } from './ReviewCard.style';

interface sectionType {
  sectionsType: string;
}

function ReviewList({ sectionsType }: sectionType) {
  const reviews = [
    {
      reviewId: 1,
      movieTitle: '올드보이',
      title: '박찬욱은 신이야! 박찬욱은 신이야! 박찬욱은 신이야! 박찬욱은 신이야!',
      contents:
        'Pizza ipsum dolor meat lovers buffalo. Lovers Bianca chicken buffalo beef thin large party Chicago pineapple. Ricotta pineapple thin pesto large anchovies. Hawaiian Bianca pepperoni large Aussie lot melted banana olives. Bianca meatball roll pork pepperoni lovers. Buffalo thin onions dolor Philly. Green party marinara black rib lot beef ham. Meatball dolor marinara onions string. Garlic Hawaiian sauce crust and.',
      reviewer: '다연',
      profileImge: 'https://avatars2.githubusercontent.com/u/132554',
      thumbnail: 'https://image.tmdb.org/t/p/w92/1E5baAaEse26fej7uHcjOgEE2t2.jpg',
      createdAt: '2024.12.01',
      likeAmount: 230,
      isLiked: false,
      spoiler: false,
    },
    {
      reviewId: 2,
      movieTitle: '기생충',
      title: '기생충은 또 하나의 명작이다',
      contents:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin auctor accumsan ex, id mollis est consequat nec. Cras pharetra nulla sit amet orci pulvinar, at tempor justo tincidunt.',
      reviewer: '영화팬',
      profileImge: 'https://avatars2.githubusercontent.com/u/123456',
      thumbnail: 'http://image.tmdb.org/t/p/w92/1E5baAaEse26fej7uHcjOgEE2t2.jpg',
      createdAt: '2024.11.29',
      likeAmount: 120,
      isLiked: true,
      spoiler: true,
    },
    {
      reviewId: 3,
      movieTitle: '기생충',
      title: '기생충은 또 하나의 명작이다',
      reviewer: '영화팬',
      profileImge: 'https://avatars2.githubusercontent.com/u/123456',
      thumbnail: 'http://image.tmdb.org/t/p/w92/1E5baAaEse26fej7uHcjOgEE2t2.jpg',
      createdAt: '2024.11.29',
      likeAmount: 120,
      isLiked: true,
      spoiler: false,
    },
  ];

  //const [reviews, setReviews] = useState([]);
  //const endpoints = ['/movies/reviews', '/movies/reviews/my', '/movies/clubReviews'];

  // useEffect(() => {
  //   axios
  //     .all(endpoints.map((endpoint) => axios.get(endpoint)))

  //     .then(function (response) {
  //       const combineReviews = response[0].data.concat(response[1].data);

  //       if (sectionsType == '모든 리뷰') {
  //         setReviews(combineReviews);
  //       }
  //     })

  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }, [sectionsType]);

  return (
    <>
      <ReviewListContainer>
        {reviews.map((review) => {
          return (
            <ReviewCard
              key={review.reviewId}
              reviewId={review.reviewId}
              movieTitle={review.movieTitle}
              title={review.title}
              contents={review.contents}
              reviewer={review.reviewer}
              profileImge={review.profileImge}
              thumbnail={review.thumbnail}
              createdAt={review.createdAt}
              likeAmount={review.likeAmount}
              isLiked={review.isLiked}
              spoiler={review.spoiler}
            />
          );
        })}
      </ReviewListContainer>
    </>
  );
}

export default ReviewList;
