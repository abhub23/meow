'use client';

import { ToggleTheme } from './ToggleTheme';

const Hero = () => {
  return (
    <div className="cat-page-background relative min-h-screen w-full">
      <div className="relative grid h-svh w-full place-items-center overflow-hidden text-black lg:h-screen dark:text-white">
        <div className="fixed top-5 right-5 z-10 lg:right-7.5">
          <ToggleTheme />
        </div>
        <div className="h-svh w-full lg:h-screen">
        </div>
      </div>
    </div>
  );
};

export default Hero;
