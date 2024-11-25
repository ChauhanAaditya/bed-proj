import React from 'react';
import { NavLink } from 'react-router-dom';
import { assets } from '../assets/assets';

const Sidebar = () => {
  const menuItems = [
    { id: 1, label: 'Add Song', icon: assets.add_song, path: '/addSong' },
    { id: 2, label: 'Add Album', icon: assets.add_album, path: '/addAlbum' },
    { id: 3, label: 'List Songs', icon: assets.song_icon, path: '/listSong' },
    { id: 4, label: 'List Albums', icon: assets.album_icon, path: '/listAlbum' },
  ];

  return (
    <div className='bg-[#003A10] min-h-screen pl-[5vw] '>
      <img src={assets.logo} className='mt-5 w-[max(10vw,100px)] hidden sm:block' alt="Logo" />
      <img src={assets.logo_small} className='mt-5 mr-5 w-[max(5vw,40px)] sm:hidden block' alt="Small Logo" />

      <div className='flex flex-col gap-5 mt-10'>
        {menuItems.map((item) => (
          <NavLink
            to={item.path}
            key={item.id}
            className={({ isActive }) =>
              `flex items-center gap-2.5 text-sm font-medium p-2 pr-[max(8vw,10px)] ${
                isActive
                  ? 'text-white bg-[#00FF5B] drop-shadow-[-4px_4px_white] border-black'
                  : 'text-gray-800 bg-white border border-black drop-shadow-[-4px_4px_#00FF5B]'
              }`
            }
          >
            <img src={item.icon} className='w-5' alt={`${item.label} Icon`} />
            <p className='hidden sm:block'>{item.label}</p>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
