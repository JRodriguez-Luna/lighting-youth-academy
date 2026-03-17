import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export const ProgramCard = () => {
  return (
    <div className='flex flex-col bg-white items-start rounded-xl shadow-xl'>
      {/* Image */}
      <div className='w-full h-1/2'>
        {/* TEMPORARY - fix cover height adjustment */}
        <img
          className='rounded-t-xl w-full h-full object-cover '
          src='images/running-101.webp'
          alt='runner'
        />
      </div>

      {/* Program Details - Mini */}
      <div className='flex flex-col my-3 mx-2 gap-3'>
        {/* title */}
        <h3 className='text-sm font-semibold'>Recreational Running</h3>
        {/* description */}
        <p className='text-xs'>Lorem ipsum dolor sit amet.</p>
        {/* Learn More */}
        <Link className='text-[9px] font-semibold cursor-pointer' to={'/learn-more'}>
          LEARN MORE <FontAwesomeIcon icon={faArrowRight} />
        </Link>
      </div>
    </div>
  );
};
