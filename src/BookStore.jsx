export default function BookStore ({books}){
    return (
        <div>
            <h3>Book : {books.length}</h3>
            {
            books.map(book => <h1>book = {book.name}</h1>)
            }
            
        </div>
    )
}