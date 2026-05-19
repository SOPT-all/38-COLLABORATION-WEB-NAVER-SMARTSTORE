import FloatingMenu from '@shared/ui/floating-menu/floating-menu';
import Footer from '@shared/ui/footer/footer';
import Header from '@shared/ui/header/header';
import Sidebar from '@shared/ui/sidebar/sidebar';
import { Outlet } from 'react-router-dom';

const GlobalLayout = () => {
  return (
    <div className='flex min-h-[163rem] flex-col'>
      <Header />
      <div className='flex flex-1'>
        <Sidebar />
        <div className='flex flex-1 flex-col'>
          <main className='flex-1'>
            <Outlet />
          </main>
          <Footer />
        </div>
        <FloatingMenu />
      </div>
    </div>
  );
};

export default GlobalLayout;
