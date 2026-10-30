'use client';

import Image from 'next/image';
import axios from 'axios';
import { ToggleTheme } from './ToggleTheme';
import { useQuery } from '@tanstack/react-query';

const Hero = () => {
  const { data } = useQuery({
    queryKey: ['catquery'],
    queryFn: async () => {
      const res = await axios.get('https://api.thecatapi.com/v1/images/search', {
        headers: {
          'x-api-key': process.env.NEXT_PUBLIC_CATAPI,
        },
      });
      return res.data;
    },
  });

  return (
    <div className="cat-page-background relative min-h-screen w-full">
      <div className="relative grid h-[100svh] w-full place-items-center overflow-hidden text-black lg:h-screen dark:text-white">
        <div className="fixed top-[20px] right-[20px] lg:right-[30px]">
          <ToggleTheme />
        </div>
        <div className="flex items-center justify-center">
          {data?.[0]?.url ? (
            <Image
              alt="Random cat"
              src={data[0].url}
              width={360}
              height={300}
              className="rounded-[4px]"
              priority={true}
              unoptimized={true}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Hero;
