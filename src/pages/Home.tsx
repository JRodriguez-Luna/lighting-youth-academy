import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HeroCard } from '../components/HeroCard';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { ProgramCard } from '../components/ProgramCard';

export const Home = () => {
  return (
    // fix width
    <div className='flex flex-col w-full'>
      <HeroCard />

      {/* Who We Are */}
      <div className='flex flex-col justify-center items-center md:my-10 md:mx-40 m-5 text-center gap-5 py-10'>
        <h3 className='font-bold'>Who We Are</h3>
        <h2 className='text-2xl font-extrabold'>
          Empowering the next generation of athletes in Santa Ana & Long Beach
        </h2>

        {/* Description */}
        <p className='text-xl'>
          Lightning Youth Academy is a non-profit 501(c)(3) organization
          dedicated to fostering physical fitness, mental resilience, and
          community spirit. We provide a supportive environment where youth can
          develop their athletic potential while building character that lasts a
          lifetime.
        </p>

        <button className='border-2 font-extrabold px-5 py-2'>
          Meet the Team
          <FontAwesomeIcon className='pl-3' icon={faUsers} />
        </button>
      </div>

      {/* Our programs */}
      <div className='flex flex-col items-center p-10 bg-gray-100 gap-5'>
        <h2 className='md:text-2xl'>Our Programs</h2>
        <p className='text-xl text-center'>
          Comprehensive training for every level of athlete.
        </p>

        {/* Cards here */}
        <div className='grid md:grid-cols-3 gap-5'>
          <ProgramCard />
          <ProgramCard />
          <ProgramCard />
        </div>
      </div>
    </div>
  );
};
