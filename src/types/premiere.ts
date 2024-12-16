export interface PremiereEntry {
  premiereId: string;
  title: string;
  approvedAt: string;
  amount: boolean;
}

export interface PremiereEntryResponse {
  message: string;
  data: {
    entry: PremiereEntry[];
  };
}
