import { useState } from 'react'


export type Book = {
  id: number;
  title: string;
  description: string;
}


export const useBooks = () => {
  const [books, setBooks] = useState<Book[]>([])

  // TODO: 本来のシーケンスの意味と異なるが、最後のID + 1 としている
  const getBookIdSecuence = () => (Math.max(...books.map(it => it.id)) + 1)
  const add = (book: Omit<Book, "id">) => setBooks(prev => {
    prev.push({id: getBookIdSecuence(), ...book})
    return prev
  })
  // TODO: 削除機能を実装する
  // const remove = ...
  const save = (book: Book) => setBooks(prev => prev.map((it) => it.id === book.id ? book : it))
  // TODO: ソート機能を実装する
  // const sort = ...

  return {
    books,
    add,
    save
  }
}
