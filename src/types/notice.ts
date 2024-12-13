export interface Notice {
  id: string;
  title: string;
  content: string;
  isRead: boolean;
  createdAt: string;
}

export interface NoticesResponse {
  message: string;
  data: Notice[];
}
