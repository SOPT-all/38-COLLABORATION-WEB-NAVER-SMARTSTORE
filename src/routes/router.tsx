import GlobalLayout from '@app/layout/global-layout';
import ProductPreview from '@pages/product-preview/product-preview';
import ProductRegister from '@pages/product-register/product-register';
import StoreHome from '@pages/store-home/store-home';
import { routePath } from '@routes/path';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: routePath.HOME,
    element: <GlobalLayout />,
    children: [
      { index: true, element: <StoreHome /> },
      { path: routePath.REGISTER, element: <ProductRegister /> },
      { path: routePath.PREVIEW, element: <ProductPreview /> },
    ],
  },
]);
