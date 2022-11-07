import { useState } from 'react';
import { Book } from './components/Book';
import { Nav } from './components/Nav';

const SampleData = {
  books: [
    {
      id: 1,
      title: 'Private Book',
      marks: [
        {
          id: 1,
          title: 'Mark Title...',
          image: 'vite.svg',
          description: 'mark description',
        },
        {
          id: 2,
          title: 'Mark Title2...',
          image: 'vite.svg',
          description: 'mark description2',
        },
      ],
    },
    { id: 2, title: 'React Study', marks: [] },
  ],
};

function App() {
  const [data, setData] = useState(SampleData);

  return (
    <div>
      <header>
        <Nav />
      </header>
      <main className='container mx-auto mt-5 flex justify-start space-y-0 px-6'>
        {data.books.map((book) => (
          <Book key={book.id} book={book} />
        ))}
        <div>
          <button className='rounded-sm bg-indigo-400 px-5 py-1 font-medium text-white hover:bg-indigo-500'>
            + Add Book
          </button>
        </div>
      </main>
      {/* <footer>Copyright Kwang</footer> */}
    </div>
  );
}

export default App;
