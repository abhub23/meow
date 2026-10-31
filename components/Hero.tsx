'use client';

import dynamic from 'next/dynamic';
import { ToggleTheme } from './ToggleTheme';

const CatViewer = dynamic(() => import('./CatViewer'), {
  ssr: false,
  loading: () => (
    <div className="grid h-full w-full place-items-center">
      <div className="size-40 animate-pulse rounded-full bg-black/5 dark:bg-white/5" />
    </div>
  ),
});

const Hero = () => {
  return (
    <div className="cat-page-background relative min-h-screen w-full">
      <div className="relative grid h-svh w-full place-items-center overflow-hidden text-black lg:h-screen dark:text-white">
        <div className="fixed top-5 right-5 z-10 lg:right-7.5">
          <ToggleTheme />
        </div>
        <div className="h-svh w-full lg:h-screen">
          <CatViewer />
        </div>
      </div>
    </div>
  );
};

export default Hero;
