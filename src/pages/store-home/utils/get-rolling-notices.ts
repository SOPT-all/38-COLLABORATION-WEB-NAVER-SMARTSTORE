export const getRollingNotices = <T>(notices: T[]) => {
  const firstNotice = notices[0];

  if (!firstNotice || notices.length <= 1) {
    return notices;
  }

  return [...notices, firstNotice];
};
