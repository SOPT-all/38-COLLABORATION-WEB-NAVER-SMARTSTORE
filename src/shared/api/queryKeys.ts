export const queryKeys = {
  notices: ['notices'] as const,
  categories: (keyword: string) => ['categories', keyword] as const,
  products: {
    all: ['products'] as const,
  },
};
