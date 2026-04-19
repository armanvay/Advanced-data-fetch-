import Link from 'next/link';
import React from 'react';

const BookCard = ({book}) => {
    
    return (
      <div className=" bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
        <div className="relative"></div>

        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-900 leading-tight mb-1">
            {book.title}
          </h2>

          <p className="text-gray-600 mb-5">
            by
            <span className="font-semibold text-gray-800">{book.author}</span>
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            <span className="bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-medium">
              {book.genre}
            </span>

            <span className="bg-amber-100 text-amber-700 px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-1">
              ⭐ {book.rating}
            </span>

            <span className="bg-emerald-100 text-emerald-700 px-4 py-1.5 rounded-full text-sm font-medium">
              {book.publishedYear}
            </span>
          </div>

          <p className="text-gray-700 text-[15px] leading-relaxed mb-8">
            {book.description}
          </p>

          <div className="flex items-center justify-between pt-5 border-t border-gray-100">
            <div>
              <span className="text-3xl font-bold text-emerald-600">
                ${book.price}
              </span>
            </div>

            <div className="text-right">
              <span className="block text-emerald-600 font-semibold text-sm">
                In Stock
              </span>
              <span className="text-gray-500 font-medium">
                {book.stock} copies
              </span>
            </div>
          </div>
          <Link href={`books/${book.id}`}>
            <button className="btn bg-green-500 font-bold w-full">
              Viwe Detials
            </button>
          </Link>
        </div>
      </div>
    );
};

export default BookCard;