import { useBooks, BookForm } from '~/features/Book'

export const App = () => {
  const { books } = useBooks()

  return (
    <>
      <div>
        <div>本</div>
        {books.map((book) => <div><span>title:{book.title}</span><span>description: {book.description}</span></div>)}
      </div>
      <div>
        新規登録
        <BookForm />
      </div>
    </>
  )
}
