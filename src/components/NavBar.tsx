import { Link } from 'react-router-dom';

const nav = [
  'Home',
  'About Us',
  'Programs',
  'Running Club',
  'Events',
  'Contact',
];

export const NavBar = () => {
  return (
    <header className='h-20 bg-black text-white'>
      <nav className='h-full flex items-center justify-between mx-10'>
        <div>Logo Here</div>
        <ul className='flex gap-5'>
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
  );
};
