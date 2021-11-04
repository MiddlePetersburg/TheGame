export interface LeaderboardNewLeaderRequest {
  data: object;
  ratingFieldName: string;
  teamName: string;
}

export interface AllLeaderboardsRequestBody {
  ratingFieldName: string;
  cursor: number;
  limit: number;
}

// Cursor is used for pagination.
// If limit is 10, then for the 1st page - cursor=0, for the 2nd page - cursor=10
export interface TeamLeaderboardRequestBody {
  ratingFieldName: string;
  cursor: number;
  limit: number;
}
