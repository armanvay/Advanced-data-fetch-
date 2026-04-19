import BookCard from '@/Component/BookCard';
import React from 'react';

const BooksPage = async() => {
    const res = await fetch("http://localhost:5000/books",{cache:"no-store"});
    const books =await res.json()
    // console.log(books)
    return (
        <div>
            <h2 className='font-bold text-2xl text-center mt-5 mb-5'>Books : {books.length}</h2>
            <div className='max-w-10/12 mx-auto grid grid-cols-3 gap-5 mb-10'>
                {
                    books.map(book =><BookCard key={book.id} book={book}></BookCard>)
                }
            </div>
            
        </div>
    );
};

export default BooksPage;