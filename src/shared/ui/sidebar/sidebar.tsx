import SidebarFooter from './sidebar-footer/sidebar-footer';
import SidebarMiddle from './sidebar-middle/sidebar-middle';
import SidebarProfile from './sidebar-profile/sidebar-profile';

const Sidebar = () => {
  return (
    <div className='flex w-[21rem] flex-col'>
      <SidebarProfile />
      <SidebarMiddle />
      <SidebarFooter />
    </div>
  );
};

export default Sidebar;
