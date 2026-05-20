import { END_POINT } from '@shared/api/config/end-point';
import { http } from '@shared/api/http';

import type { HomeNotice } from '../types/notice';

export const getAllNotices = () => {
  return http.get<HomeNotice[]>(END_POINT.NOTICES);
};
