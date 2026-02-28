export const HeroCard = () => {
  return (
    // Hero
    <div className='flex flex-col p-10 gap-10 bg-black w-full'>
      <div className='flex flex-col text-white gap-10'>
        {/* location - button for navigating */}
        <button>Santa Ana, CA</button>
        {/* Title */}
        <div className='flex flex-col text-center'>
          <h1 className='uppercase text-7xl max-md:text-3xl'>
            Inspiring Youth Runners{' '}
            <section className='text-yellow-300'>Through Learning</section> And
            Achieving
          </h1>
        </div>
        {/* Buttons - Register for 2026 & Learn More */}
        <div className='flex gap-10 justify-center'>
          <button>Register for 2026</button>
          <button>Learn More</button>
        </div>
      </div>
    </div>
  );
};
