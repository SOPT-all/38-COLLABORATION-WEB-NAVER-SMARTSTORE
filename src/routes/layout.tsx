import { Outlet } from 'react-router-dom';

import Header from '@shared/ui/header/header';

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Layout;
