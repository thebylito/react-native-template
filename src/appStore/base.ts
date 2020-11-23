export interface DuckInitialState {
  loading: boolean;
  error: string | null;
}

export interface DefaultPagination {
  page?: number;
  perPage?: number;
  q?: string;
}

export interface DefaultAction {
  type: string;
  payload?: any;
}
