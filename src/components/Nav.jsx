import { MagnifyingGlassCircleIcon } from '@heroicons/react/24/outline';

export const Nav = () => {
  return (
    <nav className='flex h-12 items-center justify-between bg-indigo-400 px-2 text-white shadow-xl'>
      <h1 className='flex text-2xl font-bold'>
        <MagnifyingGlassCircleIcon className='w-6 text-white' />
        Kwang's Index
      </h1>
      <div>
        <input
          type='text'
          placeholder='search...'
          className='w-45 h-8 bg-white pr-5
          text-right
           text-gray-400 '
        />
      </div>
    </nav>
  );
};
