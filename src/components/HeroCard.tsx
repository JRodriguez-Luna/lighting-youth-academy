import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export const HeroCard = () => {
  return (
    // Hero
    <div className='flex flex-col p-10 gap-10 bg-black w-full'>
      <div className='flex flex-col items-center text-white gap-10'>
        {/* location - button for navigating */}
        <button className='px-4 py-2 w-50 text-yellow-400 border border-yellow-500 rounded-3xl bg-yellow-400/40'>
          Santa Ana, CA
        </button>
        {/* Title */}
        <div className='flex flex-col flex-wrap text-center'>
          <h1 className='uppercase text-7xl max-md:text-3xl font-extrabold'>
            Inspiring Youth Runners{' '}
            <section className='text-yellow-300'>Through Learning</section> And
            Achieving
          </h1>
        </div>
        {/* Buttons - Register for 2026 & Learn More */}
        <div className='flex max-sm:flex-col gap-10 max-sm:gap-5 justify-center'>
          <button className='px-6 py-3 bg-yellow-300 rounded text-black font-extrabold'>
            Register for 2026
            <FontAwesomeIcon className='pl-2' icon={faArrowRight} />
          </button>
          <button className='px-6 py-3 border-2 rounded'>Learn More</button>
        </div>
      </div>
    </div>
  );
};
