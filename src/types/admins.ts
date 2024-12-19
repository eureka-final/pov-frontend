export interface MoviesAdmin {
  message: string;
  data: {
    curationMovies: CurationMovies;
  };
}

export interface Sort {
  direction: string;
  nullHandling: string;
  ascending: boolean;
  property: string;
  ignoreCase: boolean;
}

export interface Pageable {
  offset: number;
  sort: Sort[];
  paged: boolean;
  pageNumber: number;
  pageSize: number;
  unpaged: boolean;
}

export interface CurationMovie {
  id: number;
  title: string;
  released: string;
}

export interface CurationMovies {
  size: number;
  content: CurationMovie[];
  number: number;
  sort: Sort[];
  numberOfElements: number;
  pageable: Pageable;
  first: boolean;
  last: boolean;
  empty: boolean;
}
