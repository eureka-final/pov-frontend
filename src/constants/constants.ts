export const constants = {
  movies: {
    main: {
      topic: {
        recommendation: '님을 위한 추천 영화',
      },
      genres: {
        action: '액션',
        thriller: '스릴러',
        criminal: '범죄',
        comedy: '코미디',
        drama: '드라마',
      } as Genres,
    },
  },
} as const;

type Genres = Record<string, string>;
