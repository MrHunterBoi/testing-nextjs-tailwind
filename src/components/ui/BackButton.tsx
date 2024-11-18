'use client';
import { useRouter } from 'next/navigation';

export const BackButton = () => {
  const router = useRouter();

  return (
    <button
      className='py-2 px-4 duration-150 hover:bg-white hover:text-black'
      onClick={() => router.back()}
    >
      Back
    </button>
  );
};
