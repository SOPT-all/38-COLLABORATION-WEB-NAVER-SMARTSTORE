export type BaseResponse<T> = {
  success: boolean;
  status: number;
  message: string;
  data: T;
  code: string;
  meta: object;
};
