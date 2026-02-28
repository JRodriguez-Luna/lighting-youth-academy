import { Link, Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const nav = [
  'Home',
  'About Us',
  'Programs',
  'Running Club',
  'Events',
  'Contact',
];

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
    {/* Remove hidden after mobile devlopment for test */}
      <header className='max-md:w-full h-20 max-md:h-dvh bg-black text-white hidden'>
        {/* Mobile only - Hamburger and X icon */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='max-md:ml-auto flex items-end md:hidden p-2'
        >
          <FontAwesomeIcon
            icon={isOpen ? faXmark : faBars}
            className='fa-2x '
          />
        </button>

        <nav className='h-full flex max-md:flex-col items-center justify-between max-md:justify-center mx-10 max-md:gap-5 max-md:text-center'>
          <div>Logo Here</div>
          <ul className='flex max-md:flex-col gap-5 font-light'>
            {nav.map((n) => (
              <li key={n}>
                <Link to={`/${n.toLowerCase().replace(/\s+/g, '-')}`}>{n}</Link>
              </li>
            ))}
          </ul>
          <button className='px-4 py-2 bg-yellow-300 rounded text-black font-semibold cursor-pointer'>
            Donate Today
          </button>
        </nav>
      </header>
      
      {/* Main Content */}
      <main>
        <Outlet />
      </main>
    </>
  );
};
