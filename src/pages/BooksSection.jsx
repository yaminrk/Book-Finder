import { useState } from "react";
import Data from '../../public/assets/Data.js';
import BooksCard from "../MainSection/BooksCard";
import BooksHead from "../MainSection/BooksHead";

const BooksSection = () => {



    const [books, setBooks] = useState([...Data]);


    function handelSort(sortBy) {
        let array = [...books];

        switch (sortBy) {
            case "name_asc":
                array.sort((a, b) => a.title.localeCompare(b.title));
                break;
            case "name_desc":
                array.sort((a, b) => b.title.localeCompare(a.title));
                break;
            case "year_asc":
                array.sort((a, b) => parseInt(a.publicationYear, 10) - parseInt(b.publicationYear, 10));
                break;
            case "year_desc":
                array.sort((a, b) => parseInt(b.publicationYear, 10) - parseInt(a.publicationYear, 10));
                break;
            default:
                // Handle default case or no sorting
                break;
        }

        setBooks(array);
    }


    function isFavoriteHandel(id, boolean) {
        // console.log(boolean);
        setBooks(prevBooks => {
            return prevBooks.map(book => {
                if (book.id === id) {

                    return { ...book, isFavorite: boolean };
                } else {

                    return book;
                }
            });
        });
    }

    function handelSearch(text) {

        const filtered = Data.filter((book =>
            book.title.toLowerCase().includes(text.toLowerCase())
        ))
        setBooks([...filtered]);

    }





    return (
        <>
            <BooksHead
                handelSearch={handelSearch}
                handelSort={handelSort}

            />
            {/* Book Grid */}


            <div
                className="container mx-auto grid grid-cols-1 gap-8 max-w-7xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            >

                {

                    books.map((book) => {

                        return (
                            <BooksCard
                                key={book.id}
                                book={book}
                                isFavoriteHandel={isFavoriteHandel} />
                        )

                    })

                }

                {books.length === 0 && <p>No books found.</p>}


            </div>

        </>
    );
};

export default BooksSection;
