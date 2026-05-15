import Middle from './middle/middle';
import Profile from './profile/profile';
import SidebarFooter from './sidebar-footer/sidebar-footer';

const Sidebar = () => {
  return (
    <div className='w-[21rem]'>
      <Profile />
      <Middle />
      <SidebarFooter />
    </div>
  );
};

export default Sidebar;
