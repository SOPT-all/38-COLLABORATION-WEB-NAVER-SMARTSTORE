import type { AxiosRequestConfig } from 'axios';

import { axiosInstance } from './axios';
import type { BaseResponse } from './types/response';

export const http = {
  get: async <TResponse>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<TResponse> => {
    const response = await axiosInstance.get<BaseResponse<TResponse>>(
      url,
      config,
    );
    return response.data.data;
  },

  post: async <TResponse, TRequest = unknown>(
    url: string,
    data?: TRequest,
    config?: AxiosRequestConfig,
  ): Promise<TResponse> => {
    const response = await axiosInstance.post<BaseResponse<TResponse>>(
      url,
      data,
      config,
    );
    return response.data.data;
  },
  
};
