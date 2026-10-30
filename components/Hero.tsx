'use client';

import Image from 'next/image';
import axios from 'axios';
import { ToggleTheme } from './ToggleTheme';
import { useTheme } from 'next-themes';
import { useQuery } from '@tanstack/react-query';

const Hero = () => {
  const { theme } = useTheme();

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
    <>
      <div className={`relative w-full bg-neutral-50 lg:min-h-screen dark:bg-neutral-900`}>
        <div
          className="absolute inset-0 z-0"
          style={{
            background: ` ${
              theme === 'dark'
                ? `radial-gradient(ellipse 120% 80% at 70% 20%, rgba(255, 20, 147, 0.15), transparent 50%),
          radial-gradient(ellipse 100% 60% at 30% 10%, rgba(0, 255, 255, 0.12), transparent 60%),
          radial-gradient(ellipse 90% 70% at 50% 0%, rgba(138, 43, 226, 0.18), transparent 65%),
          radial-gradient(ellipse 110% 50% at 80% 30%, rgba(255, 215, 0, 0.08), transparent 40%),
          #000000`
                : `radial-gradient(circle at 30% 70%, rgba(173, 216, 230, 0.65), transparent 60%),
            radial-gradient(circle at 70% 30%, rgba(255, 182, 193, 0.70), transparent 60%)`
            }`,
          }}
        />
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
    </>
  );
};

export default Hero;
