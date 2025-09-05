export interface BaseResponse<T> {
  statusCode: number;
  message: string;
  timestamp: string;
  data: T;
}

export interface PaginationMeta {
  Page: number;
  Limit: number;
  TotalItems: number;
  TotalPages: number;
}

export interface BasePaginatedResponse<T> {
  statusCode: number;
  message: string;
  timestamp: string;
  data: {
    entities: T[];
    meta: PaginationMeta;
  };
}

// export interface ErrorResponse {
//   message: string;
//   error: string;
//   statusCode: number;
// }
