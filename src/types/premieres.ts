export interface PremieresResponse {
    message: string;
    data: {
        premieres: Premieres[];
    };
}
  
export interface Premieres {
    premiereId: number;
    title: string;
    thumbnail: string;
    startAt: string;
}