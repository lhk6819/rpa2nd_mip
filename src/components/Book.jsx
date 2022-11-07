import { Mark } from './Mark';

export const Book = ({ book }) => {
  return (
    <div className='justify-auto mt-2 ml-2 box-border flex w-2/12 flex-col border-4 hover: shadow-xl'>
      <div className='text-center text-xl font-bold'>{book.title}</div>
      {book.marks.length ? (
        book.marks.map((mark) => <Mark key={mark.id} mark={mark} />)
      ) : (
        <hr className='border-3 mt-0 mb-3' />
      )}
      <button className='w-29 mx-1 my-1 rounded-sm bg-indigo-400 px-4 py-1 font-medium text-white hover:bg-indigo-500'>
        + Add Mark
      </button>
    </div>
  );
};

