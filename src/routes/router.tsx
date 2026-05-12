import { createBrowserRouter } from 'react-router-dom';

import ProductPreview from '../pages/product-preview/product-preview';
import ProductRegister from '../pages/product-register/product-register';
import StoreHome from '../pages/store-home/store-home';
import Layout from './layout';
import { routePath } from './path';

export const router = createBrowserRouter([
  {
    path: routePath.HOME,
    element: <Layout />,
    children: [
      { index: true, element: <StoreHome /> },
      { path: routePath.REGISTER, element: <ProductRegister /> },
      { path: routePath.PREVIEW, element: <ProductPreview /> },
    ],
  },
]);
