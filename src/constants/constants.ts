export const constants = {
  movies: {
    main: {
      topic: {
        recommendation: '님을 위한 추천 영화',
        search: '에 대한 검색 결과에요.',
      },
      genres: {
        action: '액션',
        thriller: '스릴러',
        criminal: '범죄',
        comedy: '코미디',
        drama: '드라마',
      } as Genres,
      likes: '좋아요',
      reviews: '리뷰 쓰기',
      bookmark: '북마크',
    },
    detail: {
      heading: {
        review: '리뷰',
        production: '제작 및 출연',
        steel: '스틸 컷',
        videos: '관련 영상',
      },
      body: {
        review: '자세히 보기',
      },
    },
    progress: {
      like: '재밌었어요',
      unlike: '별로에요',
    },
  },
} as const;

type Genres = Record<string, string>;
