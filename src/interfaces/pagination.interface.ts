export interface PaginationParams {
  page?: number;
  limit?: number;
  name?: string;
}

export interface UsePaginationProps {
  totalPage: number;
  currentPage: number;
  siblingCount: number;
}
