import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

export const MobileMenuModal = ({
  isOpen,
  nav,
  onClose,
}: {
  isOpen: boolean;
  nav: Array<string>;
  onClose: () => void;
}) => {
  if (!isOpen) return null;

  return (
    <dialog className='h-dvh w-dvw inset-0 bg-black text-white flex flex-col items-center justify-center gap-8 z-50'>
      {/* X button */}
      <button onClick={onClose} className='absolute top-5 right-6'>
        <FontAwesomeIcon icon={faXmark} className='fa-2x' />
      </button>

      {nav.map((n) => (
        <Link
          key={n}
          to={n === 'Home' ? '/' : `/${n.toLowerCase().replace(/\s+/g, '-')}`}
          onClick={onClose}
          className='text-2xl font-light'
        >
          {n}
        </Link>
      ))}

      <button className='px-4 py-2 bg-yellow-300 rounded text-black font-semibold'>
        Donate Today
      </button>
    </dialog>
  );
};

// TO-DO: Convert this into a Modal using the dialog element.