import { MagnifyingGlassCircleIcon } from '@heroicons/react/24/outline';

export const Nav = () => {
  return (
    <nav className='flex items-center justify-between bg-indigo-500 px-2 text-white shadow'>
      <h1 className='text=2xl flex font-bold'>Hyeon Kwang's Index Page</h1>
      <div>
        <MagnifyingGlassCircleIcon className='w-4'></MagnifyingGlassCircleIcon>
      </div>
      <div>
        <input
          type='text'
          placeholder='search...'
          className='h-10 w-24 bg-indigo-500 '
        />
      </div>
    </nav>
  );
};
