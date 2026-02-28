import { Link, Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { MobileMenu } from './MobileMenu';

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
      <header className='w-full h-20 bg-black text-white'>
        {/* Mobile: hamburger only */}
        <div className='flex items-center justify-between px-6 h-full md:hidden'>
          <div>Logo Here</div>
          <button onClick={() => setIsOpen(true)}>
            <FontAwesomeIcon icon={faBars} className='fa-2x' />
          </button>
        </div>

        {/* Desktop nav */}
        <nav className='hidden md:flex h-full items-center justify-between mx-10'>
          <div>Logo Here</div>
          <ul className='flex gap-5 font-light'>
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

      {/* Mobile menu rendered outside header */}
      <MobileMenu isOpen={isOpen} nav={nav} onClose={() => setIsOpen(false)} />

      {/* Main Content */}
      <main>
        <Outlet />
      </main>
    </>
  );
};
