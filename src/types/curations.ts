export interface CurationResponse {
  message: string;
  data: CurationData;
}

export interface CurationData {
  curations: Curation[];
}

export interface Curation {
  id: number;
  title: string;
  startTime: string;
}

export interface CurationForm {
  theme: string;
  category: string;
  title: string;
  description: string;
  startTime: string;
  movieIds: number[];
}

export interface AdminCurationResponse {
  message: string;
  data: AdminCurationData;
}

export interface AdminCurationData {
  readAdminCurationResponse: ReadAdminCurationResponse;
  readAdminCurationMovieResponseList: CurationMovie[];
}

export interface ReadAdminCurationResponse {
  id: number;
  theme: string;
  category: string;
  title: string;
  description: string;
  startTime: string;
}

export interface CurationMovie {
  title: string;
  released: string;
}


