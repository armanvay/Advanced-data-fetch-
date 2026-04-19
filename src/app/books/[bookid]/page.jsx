import React, { use } from 'react';


//  dynamik 
// export const generateStaticParams=async()=>{
//     const res = await fetch("http://localhost:5000/books");
//     const books =await res.json()

//     return books.slice(0,3).map(book =>({bookid :book.id}))

// }



const BooksDetalsPage =async ({params}) => {
    const {bookid}=await params
    console.log(bookid,"this is a book id")

    const res = await fetch(`http://localhost:5000/books/${bookid}`);
    const book=await res.json()


const { price, title, author, genre }=book
console.log(book)
    return (
        <div>
            <h2>Book :{bookid}</h2>

            <div className='border p-5'>
                <h2>Name :{title}</h2>
                <h2>Price :{price}</h2>
                <h2>Author :{author}</h2>
                <h2>Genre :{genre}</h2>

            </div>
            
        </div>
    );
};

export default BooksDetalsPage;