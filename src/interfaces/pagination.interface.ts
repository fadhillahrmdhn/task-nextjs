export interface PaginationParams {
  page?: number;
  limit?: number;
}

export interface UsePaginationProps {
  totalPage: number;
  currentPage: number;
  siblingCount: number;
}
