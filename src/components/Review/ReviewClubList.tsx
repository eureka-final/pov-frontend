import { useEffect, useState } from 'react';
import axios from 'axios';
import ReviewClubCard from './ReviewClubCard';
import { ClubContainer, ClubReviewListContainer, ClubItem } from './ReviewCard.style';
import { Avatar } from 'pov-design-system';

function ReviewClubList() {
  const clubs = [
    {
      clubId: 1,
      clubName: '민음사 북클럽',
      clubImge: 'https://avatars2.githubusercontent.com/u/123456',
      reviews: [
        {
          reviewId: 1,
          movieTitle: '올드보이',
          title: '박찬욱은 신이야! 박찬욱은 신이야! 박찬욱은 신이야! 박찬욱은 신이야!',
          contents:
            '별빛은 오래전 떠난 과거의 잔광이다. 우리의 눈에 닿기까지 수억 광년을 여행한 그 빛은 우주의 기억이자, 지나간 시간의 목소리다. <빛을 향한 그리움>은 이 목소리를 포착하려는 두 가지 탐구를 엮어낸다. 천문학자들은 별에서 흘러온 빛을 통해 우주의 기원을 추적한다. 반면, 칠레의 황량한 아타카마 사막에서 가족을 잃은 유족들은 땅을 파헤치며 사라진 이들의 흔적을 찾는다. 하늘과 땅, 우주와 인간, 과학과 슬픔은 서로 다른 궤적을 그리지만, 결국 하나의 질문에 수렴한다. “과거와 기억이란 무엇이며, 우리는 무엇을 위해 그것을 붙드는가?” 사막은 이 영화의 시적 중심이다. 불모의 땅은 잊힌 기억을 품고 있고, 망원경으로 본 별들은 사라진 빛을 증언한다. 감독 파트리시오 구스만은 천문학적 경이와 인간의 비극을 하나로 엮으며, 별과 뼛조각이 같은 칼슘으로 이루어졌다는 과학적 사실을 넘어, 그것들이 공유하는 영혼의 무게를 이야기한다. <빛을 향한 그리움>은 잊혀진 존재들을 불러내는 행위가 곧 삶의 의미임을 말한다. 망각 속에서 꺼내 올린 기억은 단지 과거에 머무르지 않는다. 그것은 우리의 현재를 재구성하고 미래를 밝히는 빛이 된다. 별과 인간의 유해, 그리움과 사랑은 결국 같은 궤도에서 만난다.',
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
          contents:
            'Pizza ipsum dolor meat lovers buffalo. Lovers Bianca chicken buffalo beef thin large party Chicago pineapple. Ricotta pineapple thin pesto large anchovies. Hawaiian Bianca pepperoni large Aussie lot melted banana olives. Bianca meatball roll pork pepperoni lovers. Buffalo thin onions dolor Philly. Green party marinara black rib lot beef ham. Meatball dolor marinara onions string. Garlic Hawaiian sauce crust and.',
          reviewer: '영화팬',
          profileImge: 'https://avatars2.githubusercontent.com/u/123456',
          thumbnail: 'http://image.tmdb.org/t/p/w92/1E5baAaEse26fej7uHcjOgEE2t2.jpg',
          createdAt: '2024.11.29',
          likeAmount: 120,
          isLiked: true,
          spoiler: false,
        },
        {
          reviewId: 4,
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
      ],
    },
    {
      clubId: 2,
      clubName: '민음사 무비클럽',
      clubImge: 'https://avatars2.githubusercontent.com/u/123457',
      reviews: [
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
      ],
    },
  ];
  // 현재 선택된 클럽의 ID 상태
  const [selectedClubId, setSelectedClubId] = useState<number>(1);

  // 현재 선택된 클럽의 리뷰 가져오기
  const selectedClubReviews = clubs.find((club) => club.clubId === selectedClubId)?.reviews || [];

  return (
    <>
      <ClubContainer>
        {clubs.map((club) => {
          return (
            <ClubItem>
              <Avatar
                key={club.clubId}
                size="medium"
                username={club.clubName}
                src={club.clubImge}
                css={{ cursor: 'pointer' }}
                selected={club.clubId === selectedClubId}
                onClick={() => setSelectedClubId(club.clubId)}
              />
            </ClubItem>
          );
        })}
      </ClubContainer>
      <ClubReviewListContainer>
        {selectedClubReviews.map((review) => (
          <ReviewClubCard
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
        ))}
      </ClubReviewListContainer>
    </>
  );
}

export default ReviewClubList;
