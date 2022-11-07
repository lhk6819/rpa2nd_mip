import { TrashIcon, PencilSquareIcon } from '@heroicons/react/24/outline';

export const Mark = ({ mark }) => {
  return (
    <div className='mx-1 my-1 box-border border-4 border-indigo-300'>
      <div>
        <img
          src={mark.image}
          alt={mark.title}
          className='max-h-[100px] w-full'
        />
      </div>
      <h3 className='m-1 font-medium text-slate-700'>{mark.title}</h3>
      <p className='px-2 text-sm text-gray-400'>{mark.description}</p>
      <div className='items=center mr-3 flex justify-end'>
        <button className='mb-1 mr-1 rounded-full bg-indigo-400 p-2 hover:bg-indigo-600'>
          <PencilSquareIcon className='h-4 text-white' />
        </button>
        <button className='bg-rose-400 mb-1 rounded-full p-2 hover:bg-rose-500'>
          <TrashIcon className='h-4 text-white' />
        </button>
      </div>
    </div>
  );
};
